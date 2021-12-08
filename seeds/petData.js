const { Pet } = require('../models');

const petData = [
	{
		"petName": "Fluffy",
		"breed": "Yorkie",
		"petType": "Dog",
		"description": "Small energetic puppy",
		"age": 1,
		"picture": "one",
		"userId": 1

	},
	{
		"petName": "Arthur",
		"breed": "Domestic short-hair",
		"petType": "Cat",
		"description": "White and black indoor adult cat",
		"age": 2,
		"picture": "two",
		"userId": 2
	},
	{
		"petName": "Gwen",
		"breed": "Domestic short-hair",
		"petType": "Cat",
		"description": "Black and white indoor adult cat",
		"age": 3,
		"picture": "three",
		"userId": 3
	},
	{
		"petName": "Blue",
		"breed": "Blue Nose Pitbull",
		"petType": "Dog",
		"description": "Young playful pitbull",
		"age": 1,
		"picture": "four",
		"userId": 1
	},
	{
		"petName": "Winston",
		"breed": "English Bulldog",
		"petType": "Dog",
		"description": "Adult english bulldog well-trained",
		"age": 5,
		"picture": "five",
		"userId": 2
	},
	{
		"petName": "Duke",
		"breed": "Great Dane",
		"petType": "Dog",
		"description": "Large loveable great dane puppy",
		"age": 1,
		"picture": "six",
		"userId": 3
	},
	{
		"petName": "Sammi",
		"breed": "Mixed",
		"petType": "Cat",
		"description": "Short-hair indoor/outdoor cat",
		"age": 3,
		"picture": "seven",
		"userId": 1
	},
	{
		"petName": "Roby",
		"breed": "Parakeet",
		"petType": "Bird",
		"description": "Beautiful green parakeet",
		"age": 3,
		"picture": "eight",
		"userId": 2
	}

];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
