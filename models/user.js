// User model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Image', {
    username: {
      type: DataTypes.STRING
    }
  });
  return User;
};
