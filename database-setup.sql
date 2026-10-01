begin;
create table public.exercise_runs (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id),
 quiz_key text not null,
 quiz_title text not null,
 quiz_date date not null,
 mode text not null default 'first' check (mode in ('first','retry')),
 started_at timestamptz not null default now(),
 completed_at timestamptz,
 total_questions integer not null check (total_questions > 0),
 progress jsonb not null default '{}'::jsonb
);
create index exercise_runs_owner_date on public.exercise_runs(owner_id, quiz_date desc);
create table public.exercise_answers (
 run_id uuid not null references public.exercise_runs(id),
 question_index integer not null check (question_index >= 0),
 category text not null,
 question_text text not null,
 chosen_answer text not null,
 correct_answer text not null,
 is_correct boolean not null,
 answered_at timestamptz not null default now(),
 primary key (run_id, question_index)
);
alter table public.exercise_runs enable row level security;
alter table public.exercise_answers enable row level security;
revoke all on public.exercise_runs, public.exercise_answers from anon, authenticated;
comment on table public.exercise_runs is 'Liam: oefenrondes en hervatbare voortgang. API-toegang wordt bij de websitekoppeling ingericht.';
comment on table public.exercise_answers is 'Liam: eerste antwoord per vraag, categorie en juist/fout. Geen publieke toegang.';
commit;
select c.relname as tabel, c.relrowsecurity as beveiligd from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname in ('exercise_runs','exercise_answers');
begin;
alter table public.exercise_runs add column revision integer not null default 0;
alter table public.exercise_runs add column active boolean not null default true;
create unique index exercise_runs_one_active on public.exercise_runs(owner_id,quiz_key) where active;
alter table public.exercise_answers add column selected_index integer not null check(selected_index>=0);
alter table public.exercise_answers add column phase text not null default 'first' check(phase in ('first','retry'));
alter table public.exercise_answers drop constraint exercise_answers_pkey;
alter table public.exercise_answers add primary key(run_id,question_index,phase);
create policy runs_read on public.exercise_runs for select to authenticated using((select auth.uid())=owner_id);
create policy runs_create on public.exercise_runs for insert to authenticated with check((select auth.uid())=owner_id);
create policy runs_update on public.exercise_runs for update to authenticated using((select auth.uid())=owner_id) with check((select auth.uid())=owner_id);
create policy answers_read on public.exercise_answers for select to authenticated using(exists(select 1 from public.exercise_runs r where r.id=run_id and r.owner_id=(select auth.uid())));
create policy answers_create on public.exercise_answers for insert to authenticated with check(exists(select 1 from public.exercise_runs r where r.id=run_id and r.owner_id=(select auth.uid()) and question_index<r.total_questions));
grant select,insert on public.exercise_runs,public.exercise_answers to authenticated;
grant update(progress,revision,completed_at,active) on public.exercise_runs to authenticated;
create function public.save_exercise_progress(p_run_id uuid,p_revision integer,p_progress jsonb,p_answers jsonb default '[]'::jsonb) returns integer language plpgsql security invoker set search_path='' as $$
declare result integer; a jsonb;
begin
 if auth.uid() is null then raise exception 'Aanmelden vereist' using errcode='42501'; end if;
 update public.exercise_runs set progress=p_progress,revision=revision+1,completed_at=case when p_progress->>'fase' in ('uitslag','klaar') then coalesce(completed_at,now()) else completed_at end where id=p_run_id and owner_id=auth.uid() and revision=p_revision returning revision into result;
 if result is null then raise exception 'Voortgang gewijzigd op een ander toestel' using errcode='40001'; end if;
 for a in select value from jsonb_array_elements(p_answers) loop
  insert into public.exercise_answers(run_id,question_index,phase,selected_index,category,question_text,chosen_answer,correct_answer,is_correct) values(p_run_id,(a->>'question_index')::integer,a->>'phase',(a->>'selected_index')::integer,a->>'category',a->>'question_text',a->>'chosen_answer',a->>'correct_answer',(a->>'is_correct')::boolean) on conflict(run_id,question_index,phase) do nothing;
  if not exists(select 1 from public.exercise_answers where run_id=p_run_id and question_index=(a->>'question_index')::integer and phase=a->>'phase' and selected_index=(a->>'selected_index')::integer) then raise exception 'Het eerste antwoord telt' using errcode='23505'; end if;
 end loop;
 return result;
end; $$;
revoke all on function public.save_exercise_progress(uuid,integer,jsonb,jsonb) from public,anon;
grant execute on function public.save_exercise_progress(uuid,integer,jsonb,jsonb) to authenticated;
commit;

revoke execute on function public.rls_auto_enable() from public, anon, authenticated;

alter table public.exercise_runs add column if not exists deleted_at timestamptz;
grant update(deleted_at) on public.exercise_runs to authenticated;
create or replace function public.save_exercise_progress(p_run_id uuid,p_revision integer,p_progress jsonb,p_answers jsonb default '[]'::jsonb) returns integer language plpgsql security invoker set search_path='' as $$
declare result integer; a jsonb;
begin
 if auth.uid() is null then raise exception 'Aanmelden vereist' using errcode='42501'; end if;
 update public.exercise_runs set progress=p_progress,revision=revision+1,completed_at=case when p_progress->>'fase' in ('uitslag','klaar') then coalesce(completed_at,now()) else completed_at end where id=p_run_id and owner_id=auth.uid() and revision=p_revision and active and deleted_at is null returning revision into result;
 if result is null then raise exception 'Voortgang gewijzigd op een ander toestel' using errcode='40001'; end if;
 for a in select value from jsonb_array_elements(p_answers) loop
  insert into public.exercise_answers(run_id,question_index,phase,selected_index,category,question_text,chosen_answer,correct_answer,is_correct) values(p_run_id,(a->>'question_index')::integer,a->>'phase',(a->>'selected_index')::integer,a->>'category',a->>'question_text',a->>'chosen_answer',a->>'correct_answer',(a->>'is_correct')::boolean) on conflict(run_id,question_index,phase) do nothing;
  if not exists(select 1 from public.exercise_answers where run_id=p_run_id and question_index=(a->>'question_index')::integer and phase=a->>'phase' and selected_index=(a->>'selected_index')::integer) then raise exception 'Het eerste antwoord telt' using errcode='23505'; end if;
 end loop;
 return result;
end; $$;
