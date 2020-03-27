DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS interest CASCADE;
DROP TABLE IF EXISTS interests CASCADE;

CREATE TABLE users
(
    id bigint NOT NULL AUTO_INCREMENT,
    username varchar(64) UNIQUE NOT NULL ,
    password varchar(64),
    name varchar(32),
    birthday varchar (32),
    gender varchar (8),
    email varchar (64) UNIQUE,
    phone_number varchar (32) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE interest
(
    id  serial primary key,
    users INTEGER references users(id),
    contents   varchar(25),
);
