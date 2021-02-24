const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        directions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        URL: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        vegetarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        vegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        gluten_free: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        favorite_recipe: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        add_to_shopping_list: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    });
    return Recipe;
};

(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();

const pizza = await Recipe.create({
    name: "mushroom pizza",
    ingredients: "flour, water, salt, oil, cheese, sauce, mushrooms",
    directions: "make the dough, put the sauce, top it off, then bake that sucker!",
    URL: "www.pizza.com",
    vegetarian: true,
    vegan: false,
    gluten_free: false
})
console.log(pizza instanceof Recipe);
console.log(pizza.name);

