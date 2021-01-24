DROP DATABASE IF EXISTS burgersdb;
CREATE database burgersdb;

USE burgersdb;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

SELECT * FROM burgers