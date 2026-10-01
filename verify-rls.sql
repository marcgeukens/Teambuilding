begin;
insert into auth.users(id,aud,role) values('00000000-0000-4000-8000-000000000001','authenticated','authenticated'),('00000000-0000-4000-8000-000000000002','authenticated','authenticated');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
insert into public.exercise_runs(id,owner_id,quiz_key,quiz_title,quiz_date,total_questions) values('00000000-0000-4000-8000-000000000003','00000000-0000-4000-8000-000000000001','__verification__','Verification',current_date,2);
select public.save_exercise_progress('00000000-0000-4000-8000-000000000003',0,'{"fase":"eerste"}','[{"question_index":0,"phase":"first","selected_index":1,"category":"rekenen","question_text":"Test","chosen_answer":"2","correct_answer":"2","is_correct":true}]');
do $$begin
 if (select count(*) from public.exercise_answers where run_id='00000000-0000-4000-8000-000000000003')<>1 then raise exception 'Own answer unreadable'; end if;
 begin
  perform public.save_exercise_progress('00000000-0000-4000-8000-000000000003',0,'{}');
  raise exception 'Stale revision accepted';
 exception when serialization_failure then null; end;
 begin
  perform public.save_exercise_progress('00000000-0000-4000-8000-000000000003',1,'{}','[{"question_index":0,"phase":"first","selected_index":0,"category":"rekenen","question_text":"Test","chosen_answer":"1","correct_answer":"2","is_correct":false}]');
  raise exception 'First answer changed';
 exception when unique_violation then null; end;
 begin
  update public.exercise_answers set selected_index=0 where run_id='00000000-0000-4000-8000-000000000003';
  raise exception 'Answer update allowed';
 exception when insufficient_privilege then null; end;
 begin
  delete from public.exercise_runs where id='00000000-0000-4000-8000-000000000003';
  raise exception 'History deletion allowed';
 exception when insufficient_privilege then null; end;
end$$;
select set_config('request.jwt.claims','{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 if exists(select 1 from public.exercise_runs where id='00000000-0000-4000-8000-000000000003') or exists(select 1 from public.exercise_answers where run_id='00000000-0000-4000-8000-000000000003') then raise exception 'Other account can read'; end if;
 begin
  insert into public.exercise_answers(run_id,question_index,phase,selected_index,category,question_text,chosen_answer,correct_answer,is_correct) values('00000000-0000-4000-8000-000000000003',1,'first',0,'test','Test','1','1',true);
  raise exception 'Other account can write';
 exception when insufficient_privilege then null; end;
end$$;
set local role anon;
do $$begin
 begin
  perform 1 from public.exercise_runs;
  raise exception 'Anonymous read allowed';
 exception when insufficient_privilege then null; end;
 begin
  perform public.save_exercise_progress('00000000-0000-4000-8000-000000000003',1,'{}');
  raise exception 'Anonymous RPC allowed';
 exception when insufficient_privilege then null; end;
end$$;
rollback;
select 'PASS: own read/write, account isolation, anonymous denial, immutable answers, concurrent revision, retained history' as verification;
