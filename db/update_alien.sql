UPDATE aliens
SET name = $1
WHERE id = $2;

SELECT * FROM aliens
ORDER BY ASC;