const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Project extends Model {}

Project.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Project;
