-- Challenge 1
SELECT id, title FROM movies;

-- Challenge 2
SELECT title, duration 
FROM movies 
WHERE genre = 'Adventure';

-- Challenge 3
SELECT title 
FROM movies
WHERE genre = 'Sci-Fi';

-- Challenge 4
SELECT item, price, size 
FROM concessions 
WHERE item = 'Soda' 
OR item = 'Popcorn' 
ORDER BY price DESC;

-- Challenge 5
SELECT id, title 
FROM movies 
WHERE duration >= 86 
AND genre = 'Horror'
ORDER BY duration;

-- Challenge 6
INSERT INTO movies (title, genre, duration) 
VALUES ('The Wind', 'Romance', 95);

-- Challenge 7
INSERT INTO concessions (item, size)
VALUES ('Nachos', 'Regular');

INSERT INTO concessions (id, item, price)
VALUES (8, 'Pizza', 2.00);

-- Challenge 8
UPDATE movies
SET genre = 'Comedy'
WHERE id = 1;

-- Challenge 9
UPDATE concessions
SET item = 'Hamburger'
WHERE id = 8;

UPDATE concessions
SET price = 1.00
WHERE item = 'Popcorn'
OR item = 'Candy';

-- Challenge 10
DELETE FROM movies
WHERE genre = 'Comedy';

DELETE FROM movies
WHERE duration > 120
OR title = 'Nosferatu';

-- Challenge 11
CREATE TABLE advertisements
(
  id int,
  type varchar(10),
  category varchar(10),
  cost int 
);

INSERT INTO advertisements (id, type, category, cost) 
VALUES (1, 'Poster', 'Paper', 20);

-- Challenge 12
UPDATE advertisements
SET category = 'Television'
WHERE id = 4;

DROP TABLE advertisements;

