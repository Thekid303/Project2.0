const { Task } = require('../models');

const taskData = [
  {
    description: 'Added Handlebars templates',
    user_id: 1,
    hours: 5
  },
  {
    description: 'Added Route js files',
    user_id: 2,
    hours: 4
  },
  {
    description: 'Created public directory & files',
    user_id: 3,
    hours: 6
  },
  {
    description: 'Created server',
    user_id: 4,
    hours: 3
  },
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;