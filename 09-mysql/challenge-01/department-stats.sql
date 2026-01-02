select department,count(*) as employee_count,avg(salary) as avg_salary,max(salary) as max_salary 
from employees 
group by department 
having employee_count>2;
