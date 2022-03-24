const User = require('./User');
const Project = require('./Project');
const Comments = require('./Comment')

// Comment.belongsTo(User, {
//     foreignKey: 'userID',
//     onDelete: 'CASCADE'
// });

// Project.hasMany(Comment, {
//     foreignKey: 'ProjectId',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(Project, {
//     foreignKey: 'projectId',
//     onDelete: 'CASCADE'
// })

module.exports = {
    Project,
    Comments,
    User
}