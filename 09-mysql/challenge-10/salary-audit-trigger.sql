DELIMITER $$
CREATE TRIGGER trg_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    -- Log only when salary actually changes
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO salary_audit (
            employee_id,
            old_salary,
            new_salary,
            change_percent
        )
        VALUES (
            OLD.id,
            OLD.salary,
            NEW.salary,
            ROUND(
                ((NEW.salary - OLD.salary) / OLD.salary) * 100,
                2
            )
        );
    END IF;
END$$
DELIMITER ;


INSERT INTO employees (name, department, salary, hire_date)
VALUES ('John Smith', 'IT', 50000.00, '2021-06-15');