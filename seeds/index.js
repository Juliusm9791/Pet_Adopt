const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPet = require('./petData');
const seedMessage = require('./messageData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPet();
  console.log('\n----- PETS SEEDED -----\n');

  await seedMessage();
  console.log('\n----- MESSAGE SEEDED -----\n');

  process.exit(0);
};

seedAll();
