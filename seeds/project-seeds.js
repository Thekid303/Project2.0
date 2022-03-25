const { Project } = require('../models');

const projectData = [
  {
    name: 'Project Hub',
    description: 'An application to help users track their projects',
    user_id: 1
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;