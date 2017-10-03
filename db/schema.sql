CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(500) NOT NULL,
  devoured enum('yes', 'no'),
  date TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);
