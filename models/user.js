// User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Recipe, {
      onDelete: 'cascade'
    })
  }
  return User;
};