DROP TABLE IF EXISTS user CASCADE;

CREATE TABLE user (
    id integer identity,
    user_id varchar(64) NOT NULL UNIQUE );
