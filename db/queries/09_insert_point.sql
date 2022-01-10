INSERT INTO points (map_id, creator_id, title, description, image, latitude, longitude)
VALUES (pointObj.map_id, pointObj.creator_id, pointObj.title, pointObj.description, pointObj.image, pointObj.latitude, pointObj.longitude);


UPDATE maps
SET title = 'Best Pizza 🍕',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 18;
UPDATE maps
SET title = 'Parks',
    description = 'Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 17;
UPDATE maps
SET title = 'Shopping Malls',
    description = 'Lorem ipsum dolor sit amet. Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 16;
UPDATE maps
SET title = 'Concert Venues',
    description = 'Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 15;
UPDATE maps
SET title = 'Chinese Food!',
    description = 'Lorem ipsum dolor sit amet. Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 14;
UPDATE maps
SET title = 'Photography Spots 📷',
    description = 'Etiam at ligula vulputate, fringilla augue eget, sodales augue. Curabitur ac euismod metus, ac laoreet ante. Integer vitae pulvinar felis.'
WHERE id = 13;
