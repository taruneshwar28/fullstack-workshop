DELIMITER $$
CREATE FUNCTION GetTenureCategory(hire_date DATE)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE years_diff INT;

    SET years_diff = TIMESTAMPDIFF(YEAR, hire_date, CURDATE());

    IF years_diff > 5 THEN
        RETURN 'Veteran';
    ELSEIF years_diff BETWEEN 2 AND 5 THEN
        RETURN 'Experienced';
    ELSE
        RETURN 'New Hire';
    END IF;
END$$
DELIMITER ;


SELECT
    name,
    hire_date,
    GetTenureCategory(hire_date) AS tenure_category
FROM employees;