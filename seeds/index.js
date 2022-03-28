const Sequelize = require('../config/config');
const seedPost = require('./postData');
const { User } = require('../models')

const seedAll = async () => {
    // await sequelize.sync({ force: true });
    await  seedPost();
    process.exit(0);
}

seedAll();