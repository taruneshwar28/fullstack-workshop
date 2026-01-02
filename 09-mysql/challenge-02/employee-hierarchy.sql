select e.name as employee_name,m.name as manager_name from employees as e left join employees m on e.id=m.manager_id;
