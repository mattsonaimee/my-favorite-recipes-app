module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        name: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        directions: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },
        URL: {
            type: DataTypes.STRING(1234),
            allowNull: true,
        },
        directions: {
            type: DataTypes.STRING(1234),
            allowNull: false,
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
        },
    });
    return Recipe;
};