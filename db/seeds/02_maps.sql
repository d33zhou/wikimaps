insert into maps (creator_id, title, description) values (4, 'morbi sem mauris', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.');
insert into maps (creator_id, title, description) values (22, 'mi integer', 'Nulla suscipit ligula in lacus.');
insert into maps (creator_id, title, description) values (6, 'curabitur gravida nisi', 'Nullam varius.');
insert into maps (creator_id, title, description) values (15, 'vivamus vel nulla', 'Morbi porttitor lorem id ligula.');
insert into maps (creator_id, title, description) values (4, 'sagittis', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.');
insert into maps (creator_id, title, description) values (8, 'varius', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.');
insert into maps (creator_id, title, description) values (19, 'lorem ipsum', 'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.');
insert into maps (creator_id, title, description) values (19, 'semper rutrum nulla', 'Duis at velit eu est congue elementum.');
insert into maps (creator_id, title, description) values (3, 'id', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.');
insert into maps (creator_id, title, description) values (1, 'eu', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into maps (creator_id, title, description) values (13, 'quisque erat', 'Ut at dolor quis odio consequat varius.');
insert into maps (creator_id, title, description) values (2, 'eget nunc', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.');
insert into maps (creator_id, title, description) values (23, 'volutpat', 'Phasellus in felis.');
insert into maps (creator_id, title, description) values (12, 'metus sapien', 'Etiam pretium iaculis justo.');
insert into maps (creator_id, title, description) values (8, 'integer pede', 'In est risus, auctor sed, tristique in, tempus sit amet, sem.');
insert into maps (creator_id, title, description) values (8, 'ipsum', 'Aliquam non mauris. Morbi non lectus.');
insert into maps (creator_id, title, description) values (9, 'a suscipit', 'Etiam pretium iaculis justo.');
insert into maps (creator_id, title, description) values (14, 'tempus vivamus in', 'Sed ante. Vivamus tortor.');

-- update more meaningful content
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
