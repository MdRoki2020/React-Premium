module.exports = (sequelize, DataTypes) => {
    const infos = sequelize.define("infos", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return infos;
  };