const { User } = require('../models');

const userdata = [
  {
    username: 'specsnstats',
  },
  {
    username: 'jmarq019',
  },
  {
    username: 'chloeharris1',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;