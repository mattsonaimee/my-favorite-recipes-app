USE recipes_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    email VARCHAR (30),
    user_password VARCHAR (30),
    PRIMARY KEY (id)
);



    INSERT INTO users
        (email, user_password)
    VALUES
        ('samrogers15@gmail.com', 'password2');
