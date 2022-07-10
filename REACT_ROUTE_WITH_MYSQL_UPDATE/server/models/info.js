module.exports = (sequelize, DataTypes) => {
    const info = sequelize.define("info", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return info;
  };