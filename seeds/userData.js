const { User } = require('../models');

const userData = [
	{
		"lastName": "Hernandez",
		"firstName": "Gino",
		"email": "Gino@hotmail.com",
		"password": "password12345",
		"phoneNumber": "3058882298"
	},
	{
		"lastName": "Smith",
		"firstName": "Bob",
		"email": "Smith@hotmail.com",
		"password": "password2543",
		"phoneNumber": "5618295634"
	},
	{
		"lastName": "Rogers",
		"firstName": "Aaron",
		"email": "Aaron@hotmail.com",
		"password": "password2387",
		"phoneNumber": "7062895743"
	},
	{
		"lastName": "Harrison",
		"firstName": "Samuel",
		"email": "Samuel@hotmail.com",
		"password": "password8976",
		"phoneNumber": "5612398426"
	},
	{
		"lastName": "Garrison",
		"firstName": "Luke",
		"email": "Luke@hotmail.com",
		"password": "password7432",
		"phoneNumber": "3052218795"
	},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
