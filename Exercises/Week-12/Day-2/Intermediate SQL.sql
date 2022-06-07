-- Challenge 1
SELECT MAX(salary), MIN(salary) FROM Actors;

-- Challenge 2
SELECT COUNT(*)
FROM Actors
WHERE country = 'USA';

-- Challenge 3
SELECT SUM(salary) FROM Actors;

-- Challenge 4
SELECT AVG(salary) FROM Actors WHERE country = 'USA';

-- Challenge 5
SELECT country, SUM(salary)
FROM Actors
WHERE role = 'supporting'
GROUP BY country
HAVING COUNT(*) > 1;

-- Challenge 6
CREATE TABLE Actors (
  name varchar(50) NOT NULL UNIQUE,
  country varchar(50)
);

-- Challenge 7
CREATE TABLE Movies (
  name varchar(50) NOT NULL,
  language varchar(50),
  CONSTRAINT name_lang UNIQUE (name, language)
);

-- Challenge 8
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country varchar(50)
);

-- Challenge 9
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int REFERENCES Countries(id)
);

-- Challenge 10
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int,
  FOREIGN KEY (country_id) REFERENCES Countries (id)
);

-- Challenge 11
DROP TABLE Actors;
DROP TABLE Countries;

-- Challenge 12
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  salary int CHECK (salary >= 500),
  bonus integer CHECK (bonus < salary),
  country_id int REFERENCES Countries(id)
);

-- Challenge 13
CREATE TABLE Actors_Movies (
  actor_id int REFERENCES actors,
  movie_id int REFERENCES movies
);

-- Challenge 14
INSERT INTO Actors_Movies (actor_id, movie_id)
VALUES (2, 5);

-- Challenge 15
CREATE TABLE Rooms (
  id int PRIMARY KEY,
  seats int,
  movie_id int UNIQUE,
  FOREIGN KEY (movie_id) REFERENCES Movies
);

-- Challenge 16
SELECT Movies.title, Rooms.id, Rooms.seats FROM Movies
INNER JOIN Rooms
ON Movies.id = Rooms.movie_id
WHERE Rooms.seats > 75
ORDER BY Rooms.seats DESC;

-- Challenge 17
SELECT Actors.name, Movies.title FROM Actors
INNER JOIN Actors_Movies
ON Actors.id = Actors_Movies.actor_id
INNER JOIN Movies
ON Actors_Movies.movie_id = Movies.id
ORDER BY Movies.title;

-- Challenge 18
SELECT m.title 'Movie Title', r.id 'Theatre Number', r.seats
FROM Movies m
INNER JOIN Rooms r
ON m.id = r.movie_id
WHERE r.seats > 75
ORDER BY r.seats desc;

-- Challenge 19
SELECT a.name, m.title
FROM Actors a
INNER JOIN Actors_Movies am
ON a.id = am.actor_id
INNER JOIN Movies m
ON am.movie_id = m.id
ORDER BY m.title;

-- Challenge 20
SELECT m.title, r.id "Theatre Number"
FROM Movies m
LEFT OUTER JOIN Rooms r
ON m.id = r.movie_id;

-- Challenge 21
SELECT m.title, r.id "Theatre Number"
FROM Movies m
RIGHT OUTER JOIN Rooms r
ON m.id = r.movie_id;

-- Challenge 22
SELECT title
FROM movies
WHERE id IN (SELECT movie_id FROM rooms WHERE seats > 75);

-- Challenge 23
SELECT id FROM rooms WHERE seats > (SELECT AVG(seats) FROM rooms);     

-- Challenge  24
SELECT r.id, m.title
FROM rooms r
LEFT OUTER JOIN movies m
ON r.movie_id = m.id
WHERE seats > (SELECT AVG(seats) FROM rooms);
