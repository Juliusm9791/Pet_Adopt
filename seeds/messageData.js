const { Message } = require('../models');

const messageData = [
	{
		"message_text": "message goes here",
		"petId": 1,
		"userId": 1,
		"username": "Hernandez",
	},
	{
		"message_text": "message goes here",
		"petId": 2,
		"userId": 2,
		"username": "Smith",
	},
	{
		"message_text": "message goes here",
		"petId": 3,
		"userId": 3,
		"username": "Rogers",
	},
	{
		"message_text": "message goes here",
		"petId": 4,
		"userId": 4,
		"username": "Harrison",
	},	
  {
		"message_text": "message goes here",
		"petId": 5,
		"userId": 5,
		"username": "Garrison",
	},
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;
