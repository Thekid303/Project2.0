const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    boss: DataTypes.STRING, 
    rate: DataTypes.INTEGER, 
    date: DataTypes.STRING,
  },
  {
    sequelize
  }
);

module.exports = Post;
