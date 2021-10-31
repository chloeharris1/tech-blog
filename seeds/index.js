const sequelize = require('../config/connection');
const userData = require('./userData');
const postData = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
