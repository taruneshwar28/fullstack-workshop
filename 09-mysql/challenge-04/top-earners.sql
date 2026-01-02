select * from (select department,name,salary,rank() over(partition by department order by salary desc) as rank_in_dept from employees) as e where rank_in_dept<=3;
