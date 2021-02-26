USE recipes_db;

INSERT INTO users (username)
VALUES ('Frank');

INSERT INTO recipes
    (name, ingredients, directions, URL, vegetarian, vegan, gluten_free, favorite_recipe, add_to_shopping_list)
VALUES('lasagna', 'dough, sauce, cheese, pepperoni', 'Throw the stuff together and put it in the oven', 'our website', 0, 0, 0, 1, 1);