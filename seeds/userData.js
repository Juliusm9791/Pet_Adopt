const { User } = require('../models');

const userData = [
	{
		"lastname": "Hernandez",
		"firstname": "Gino",
		"email": "Gino@hotmail.com",
		"password": "password12345",
		"phonenumber": "3058882298"
	},
	{
		"lastname": "Smith",
		"firstname": "Bob",
		"email": "Smith@hotmail.com",
		"password": "password2543",
		"phonenumber": "5618295634"
	},
	{
		"lastname": "Rogers",
		"firstname": "Aaron",
		"email": "Aaron@hotmail.com",
		"password": "password2387",
		"phonenumber": "7062895743"
	},
	{
		"lastname": "Harrison",
		"firstname": "Samuel",
		"email": "Samuel@hotmail.com",
		"password": "password8976",
		"phonenumber": "5612398426"
	},
	{
		"lastname": "Garrison",
		"firstname": "Luke",
		"email": "Luke@hotmail.com",
		"password": "password7432",
		"phonenumber": "3052218795"
	},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
