const { User } = require('../models');

const userdata = [
  {
    username: 'goldengod98',
    password: 'password'
  },
  {
    username: 'zingingcutie23',
    password: 'password'
  },
  {
    username: 'ricketycricket',
    password: 'password'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;