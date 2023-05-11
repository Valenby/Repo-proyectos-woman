const {DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/postgresql');

class user extends Model {}

user.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.NUMBER
    },
  },{
    sequelize,
    modelName: 'user'
  });

  module.exports = user;
