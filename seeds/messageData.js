const { Message } = require('../models');

const messageData = [
	{
		"message_text": "So cute can't wait to bring him home",
		"petId": 1,
		"userId": 1,
		"username": "Hernandez",
	},
	{
		"message_text": "Very adorable",
		"petId": 2,
		"userId": 2,
		"username": "Smith",
	},
	{
		"message_text": "Glad to find a home for her",
		"petId": 3,
		"userId": 3,
		"username": "Rogers",
	},
	{
		"message_text": "Happy to add a new member to the family",
		"petId": 4,
		"userId": 4,
		"username": "Harrison",
	},	
  {
		"message_text": "Can't wait to meet him",
		"petId": 5,
		"userId": 5,
		"username": "Garrison",
	},
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;
