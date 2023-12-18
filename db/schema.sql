DROP DATABASE IF EXISTS mysqlTodos;
CREATE DATABASE mysqlTodos;

USE mysqlTodos;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE todos (
    id INT NOT NULL AUTO_INCREMENT,
    todo VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


