const { Task } = require('../models');

const taskData = [
  {
    description: 'Added Handlebars templates',
    project_id: 1,
    user_id: 1,
    hours: 5
  },
  {
    description: 'Added Route js files',
    project_id: 1,
    user_id: 2,
    hours: 4
  },
  {
    description: 'Created public directory & files',
    project_id: 1,
    user_id: 3,
    hours: 6
  },
  {
    description: 'Created server',
    project_id: 2,
    user_id: 4,
    hours: 3
  },
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;