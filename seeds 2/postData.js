const { Post } = require('../models');

const postdata = [
   {
    title: 'Project 1',
    body: 'this is a description for project 1',
    date: 03/28/2022
    },
    {
    title: 'Project 2',
    body: 'this is a description for project 2',
    date: 06/28/2022
    },
    {
    title: 'Project 3',
    body: 'this is a description for project 3',
    date: 09/28/2022
    },
];

const seedPost = () => Post.bulkCreate(postdata)

module.exports = seedPost