SELECT *
FROM maps
WHERE creator_id = userId;

SELECT *
FROM points
WHERE creator_id = userId;

SELECT points.*,users.id,maps.*
FROM points
JOIN users ON users.id = points.creator_id
RIGHT JOIN maps ON maps.creator_id = users.id
WHERE users.id =1;


SELECT *
FROM maps
WHERE creator_id = 7 OR id = (SELECT DISTINCT map_id
FROM points
WHERE creator_id = 7);


SELECT maps.id, points.id
FROM maps
LEFT JOIN points ON points.map_id = maps.id
WHERE maps.creator_id = 1;
