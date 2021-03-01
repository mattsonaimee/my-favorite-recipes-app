USE recipes_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    email VARCHAR (30),
    user_password VARCHAR (30),
    PRIMARY KEY (id)
);



-- CREATE TABLE authors(
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   firstName VARCHAR(100),
--   lastName VARCHAR(100),
--   PRIMARY KEY (id)
-- );

    INSERT INTO users
        (email, user_password)
    VALUES
        ('samrogers15@gmail.com', 'password2');

-- INSERT INTO recipes
--     (name, ingredients, directions, URL, vegetarian, vegan, gluten_free, favorite_recipe, add_to_shopping_list)
-- VALUES('lasagna', 'dough, sauce, cheese, pepperoni', 'Throw the stuff together and put it in the oven', 'our website', 0, 0, 0, 1, 1);