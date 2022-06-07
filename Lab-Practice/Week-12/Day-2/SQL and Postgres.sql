-- Challenge 1
SELECT author_id, COUNT(*)
FROM books
GROUP BY author_id;

-- Challenge 2
SELECT name, COUNT(*)
FROM books
JOIN authors 
ON authors.id = books.author_id
GROUP BY authors.name;

-- Challenge 3
SELECT manufacturer, SUM(price * units_sold)
FROM phones
GROUP BY manufacturer
HAVING SUM(price * units_sold) > 2000000;

-- Challenge 4
SELECT paid, COUNT(*)
FROM orders
GROUP BY paid;

-- Challenge 5
SELECT first_name, last_name, paid
FROM users
JOIN orders ON orders.user_id =
    users.id;

-- Challenge 6
SELECT name
FROM phones
ORDER BY price DESC
LIMIT 2
OFFSET 1;

-- Challenge 7
SELECT manufacturer
FROM phones
WHERE price < 170
UNION
SELECT manufacturer
FROM phones
GROUP BY manufacturer
HAVING COUNT(*) > 2;

--  Challenge 8
SELECT name, price, price / (SELECT MAX(price) FROM phones) AS price_ratio
FROM phones;

-- Challenge 9
SELECT MAX(p.avg_price) AS max_average_price
FROM (
    SELECT AVG(price) AS avg_price
    FROM phones
    GROUP BY manufacturer
) AS p;

-- Challenge 10
SELECT name, price
FROM phones
WHERE price > (SELECT price FROM phones WHERE name = 'S5620 Monte')

-- Challenge 11
SELECT name
FROM phones
WHERE price > All (
    SELECT price FROM phones WHERE manufacturer = 'Samsung'
)

-- Challenge 12
SELECT
    (SELECT MAX(price) FROM phones) AS max_price,
    (SELECT MIN(price) FROM phones) AS min_price,
    (SELECT AVG(price) FROM phones) AS avg_price;

-- Challenge 13
SELECT COUNT(DISTINCT manufacturer)
FROM phones;