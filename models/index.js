
const User = require('./User');
const Project = require('./Project');
const Task = require('./Task');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
  
Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Task.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Task };
