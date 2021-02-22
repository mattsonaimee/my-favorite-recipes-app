module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        image_name: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    return Image
}
