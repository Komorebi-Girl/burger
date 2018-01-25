CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(70) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (id)
);

