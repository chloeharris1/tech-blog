const { User } = require('../models');

const userdata = [
  {
    username: 'goldengod98',
  },
  {
    username: 'zingingcutie23',
  },
  {
    username: 'ricketycricket',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;