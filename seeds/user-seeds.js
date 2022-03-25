const { User } = require('../models');

const userData = [
  {
    name: 'Marissa Fandel',
    email: 'mfandel118@gmail.com',
    password: 'password1'
  },
  {
    name: 'Joseph Dugan',
    email: 'joseph.michael.dugan@gmail.com',
    password: 'password2'
  },
  {
    name: 'Amit Singhal',
    email: 'singhal8@gmail.com',
    password: 'password3'
  },
  {
    name: 'Nick Graves',
    email: 'nicholasgraves4@icloud.com',
    password: 'password4'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;