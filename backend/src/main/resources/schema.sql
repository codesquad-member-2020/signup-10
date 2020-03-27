DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS interests CASCADE;

CREATE TABLE users
(
    id bigint NOT NULL AUTO_INCREMENT,
    username varchar(64) UNIQUE NOT NULL ,
    password varchar(64),
    name varchar(32),
    birthday date,
    gender varchar (8),
    email varchar (64) UNIQUE,
    phone_number varchar (32) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE interests
(
    id       bigint NOT NULL AUTO_INCREMENT,
    user_id  bigint NOT NULL ,
    contents   varchar(25),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE  RESTRICT
);
