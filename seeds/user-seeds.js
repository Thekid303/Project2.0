const { User } = require('../models');

const userData = [
  {
    name: 'Marissa Fandel',
    email: 'mfandel118@gmail.com',
    password: '$2b$10$Rfii86QnJP/z87571gvBPeOCWyXCfqziVxDMx5aXKO3tbkvM5kX7C'
  },
  {
    name: 'Joseph Dugan',
    email: 'joseph.michael.dugan@gmail.com',
    password: '$2b$10$Rfii86QnJP/z87571gvBPeOCWyXCfqziVxDMx5aXKO3tbkvM5kX7C'
  },
  {
    name: 'Amit Singhal',
    email: 'singhal8@gmail.com',
    password: '$2b$10$Rfii86QnJP/z87571gvBPeOCWyXCfqziVxDMx5aXKO3tbkvM5kX7C'
  },
  {
    name: 'Nick Graves',
    email: 'nicholasgraves4@icloud.com',
    password: '$2b$10$Rfii86QnJP/z87571gvBPeOCWyXCfqziVxDMx5aXKO3tbkvM5kX7C'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;