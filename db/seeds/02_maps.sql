insert into maps (creator_id, title, description, latitude, longitude, location) values (4, 'morbi sem mauris', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (22, 'mi integer', 'Nulla suscipit ligula in lacus.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (6, 'curabitur gravida nisi', 'Nullam varius.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (15, 'vivamus vel nulla', 'Morbi porttitor lorem id ligula.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (4, 'sagittis', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (8, 'varius', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (19, 'lorem ipsum', 'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (19, 'semper rutrum nulla', 'Duis at velit eu est congue elementum.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (3, 'id', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (1, 'eu', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (13, 'quisque erat', 'Ut at dolor quis odio consequat varius.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (2, 'eget nunc', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (23, 'volutpat', 'Phasellus in felis.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (12, 'metus sapien', 'Etiam pretium iaculis justo.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (8, 'integer pede', 'In est risus, auctor sed, tristique in, tempus sit amet, sem.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (8, 'ipsum', 'Aliquam non mauris. Morbi non lectus.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (9, 'a suscipit', 'Etiam pretium iaculis justo.', 43.657572963908336, -79.41145185759068, 'Toronto');
insert into maps (creator_id, title, description, latitude, longitude, location) values (14, 'tempus vivamus in', 'Sed ante. Vivamus tortor.', 43.657572963908336, -79.41145185759068, 'Toronto');

-- update more meaningful content
UPDATE maps
SET title = 'Best Pizza 🍕',
    description = 'In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.'
WHERE id = 18;

UPDATE maps
SET title = 'Parks 🌳🌳🌳',
    description = 'Recognized as one of the most significant natural sites in Toronto, over one-third of High Park remains in a natural state. A jewel in the city’s park system, residents and visitors can enjoy its many attractions, playgrounds and features year-round.'
WHERE id = 17;

UPDATE maps
SET title = 'Shopping Malls',
    description = 'A shopping mall (or simply mall) is a North American term for a large indoor shopping center, usually anchored by department stores. The term "mall" originally meant a pedestrian promenade with shops along it.'
WHERE id = 16;

UPDATE maps
SET title = 'Concert Venues',
    description = 'Since then, more than 36 million fans have attended 2,500 events. In addition to hosting concerts, the ACC is home to the Toronto Maple Leafs, Toronto Raptors and the Toronto Rock lacrosse. It can hold more than 19,000 people'
WHERE id = 15;

UPDATE maps
SET title = 'Chinese Food!',
    description = 'Traditional Chinese food has to always be fresh. Most dishes are filled with huge quantities of vegetables, grass-fed meats, seafood and herbs and spices.'
WHERE id = 14;

UPDATE maps
SET title = 'Photography Spots 📷',
    description = 'Hundreds of No Hassle Photo Shoot Places On Any Budget. Book by the Hour or the Day. Peerspace Is On a Mission to Bring People Together to Meet, Create, and Celebrate. Book in Just a Few Clicks. Compare Prices. Meet, Create, & Celebrate. Connect with Hosts.'
WHERE id = 13;

UPDATE maps
SET title = 'Hiking Trails',
    description = 'Little known fact: when it comes to wooded trails and beautiful views, Toronto has a lot to offer. Dont get lost in the concrete jungle on your next trip to the Six—instead, bring your hiking boots and use them!'
WHERE id = 12;

UPDATE maps
SET title = 'Book Stores',
    description = 'Find bestselling books, toys, fashion, home décor, stationery, electronics & so much more! Plus, free shipping and pickup in store on eligible orders.'
WHERE id = 11;

UPDATE maps
SET title = 'Historic Buildings',
    description = 'This is a list of the oldest buildings and structures in Toronto, that were constructed before 1920. The history of Toronto dates back to indigenous settlements in the region approximately 12,000 years ago.'
WHERE id = 10;

UPDATE maps
SET title = 'Best Indian Restaurants',
    description = 'Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.'
WHERE id = 9;

UPDATE maps
SET title = 'Beaches 🌞 🏖️',
    description = 'Many of Torontos waterfront parks have sand or cobble beaches for you to enjoy. Soak up the lakeside atmosphere, come for a picnic or some beach volleyball.'
WHERE id = 8;

UPDATE maps
SET title = 'Cinemas',
    description = 'We loved the VIP experience. They kept everyone socially distanced and extensively sanitized the theater between movies.'
WHERE id = 7;
