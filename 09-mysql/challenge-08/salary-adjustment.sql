DELIMITER $$
CREATE PROCEDURE AdjustDepartmentSalary(
    IN dept VARCHAR(50),
    IN percent DECIMAL(5,2),
    OUT affected_count INT
)
BEGIN
    -- Safety check: do nothing if percentage is negative
    IF percent < 0 THEN
        SET affected_count = 0;
    ELSE
        UPDATE employees
        SET salary = salary + (salary * percent / 100)
        WHERE department = dept;
        -- Get number of affected rows
        SET affected_count = ROW_COUNT();
    END IF;
END$$
DELIMITER ;



CALL AdjustDepartmentSalary('IT', 10.00, @count);

SELECT @count AS affected_employees;


CALL AdjustDepartmentSalary('HR', -5.00, @count);

SELECT @count AS affected_employees;


CALL AdjustDepartmentSalary('Legal', 8.00, @count);

SELECT @count AS affected_employees;