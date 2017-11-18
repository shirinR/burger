-- CREATE DATABASE burgers_db;
-- USE burgers_db;

-- mysql://bae677c601ae76:5fe353b9@us-cdbr-iron-east-05.cleardb.net/heroku_6dd6556df0ed6ba?reconnect=true

CREATE TABLE burgers(
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  `date` TIMESTAMP NOT NULL,
  PRIMARY KEY(`id`)
);
