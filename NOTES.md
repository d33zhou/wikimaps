psql -U vagrant -d template1

CREATE ROLE labber WITH LOGIN password 'labber';
CREATE DATABASE midterm OWNER labber;