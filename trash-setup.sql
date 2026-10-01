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
