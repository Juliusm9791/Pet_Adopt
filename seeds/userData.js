const { User } = require('../models');

const userData = [
  {
    "username": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "12345678"
  },
  {
    "username": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  },
  {
    "username": "Jordan",
    "email": "jordan99@msn.com",
    "password": "password12345"
  },
  {
    "username": "Blake",
    "email": "the_blake@yahoo.com",
    "password": "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
