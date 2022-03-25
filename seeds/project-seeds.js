const { Project } = require('../models');

const projectData = [
  {
    name: 'Project Hub',
    description: 'An application to help users track their projects',
    user_id: 1
  },
  {
    name: 'Project 2',
    description: 'this is project two',
    user_id: 2
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;