const { Pet } = require('../models');

const petData = [
	{
		"petName": "Fluffy",
		"breed": "Yorkie",
		"petType": "Dog",
		"description": "small energetic puppy",
		"age": 1,
		"picture": "one",
		"userId": 1

	},
	{
		"petName": "Arthur",
		"breed": "domestic short hair",
		"petType": "cat",
		"description": "white and black indoor adult cat",
		"age": 2,
		"picture": "two",
		"userId": 2
	},
	{
		"petName": "Gwen",
		"breed": "domestic short hair",
		"petType": "cat",
		"description": "black and white indoor adult cat",
		"age": 3,
		"picture": "three",
		"userId": 3
	},
	{
		"petName": "Blue",
		"breed": "pitbull",
		"petType": "dog",
		"description": "young energetic pitbull",
		"age": 1,
		"picture": "four",
		"userId": 1
	},
	{
		"petName": "Winston",
		"breed": "english bulldog",
		"petType": "dog",
		"description": "adult english bulldog well trained",
		"age": 5,
		"picture": "five",
		"userId": 2
	},
	{
		"petName": "Duke",
		"breed": "great dane",
		"petType": "dog",
		"description": "large loveable great dane puppy",
		"age": 1,
		"picture": "six",
		"userId": 3
	},
	{
		"petName": "Grumpy",
		"breed": "mixed",
		"petType": "cat",
		"description": "long hair indoor outdoor cat",
		"age": 3,
		"picture": "seven",
		"userId": 1
	}
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
