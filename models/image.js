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
    },
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
  });

  Image.associate = (models) => {
    Image.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false,
        onDelete: 'cascade'
      }
    });
  };

  return Image;
};