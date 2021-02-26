module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    type: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    data: {
      type: DataTypes.BLOB('long')
    }
  });

  Image.associate = (models) => {
    Image.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Image;
};