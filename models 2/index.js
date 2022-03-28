const User = require('./User');
const Post = require('./Post');
const Project = require('./Project');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Project, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Project,
  Post
};