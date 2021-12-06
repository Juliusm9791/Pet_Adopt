const { Pet } = require('../models');

const petData = [
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"petType": "dog",
		"description": "small energetic puppy",
		"age": 1,
		"picture": "link1",
		"userId": 1

	},
	{
		"petName": "Arthur",
		"breed": "domestic short hair",
		"petType": "cat",
		"description": "white and black indoor adult cat",
		"age": 2,
		"picture": "link2",
		"userId": 2
	},
	{
		"petName": "Gwen",
		"breed": "domestic short hair",
		"petType": "cat",
		"description": "black and white indoor adult cat",
		"age": 3,
		"picture": "link3",
		"userId": 3
	},
	{
		"petName": "Blue",
		"breed": "pitbull",
		"petType": "dog",
		"description": "young energetic pitbull",
		"age": 1,
		"picture": "link4",
		"userId": 1
	},
	{
		"petName": "Winston",
		"breed": "english bulldog",
		"petType": "dog",
		"description": "adult english bulldog well trained",
		"age": 5,
		"picture": "link5",
		"userId": 2
	},
	{
		"petName": "Duke",
		"breed": "great dane",
		"petType": "dog",
		"description": "large loveable great dane puppy",
		"age": 1,
		"picture": "link6",
		"userId": 3
	},
	{
		"petName": "grumpy",
		"breed": "mixed",
		"petType": "cat",
		"description": "long hair indoor outdoor cat",
		"age": 3,
		"picture": "link7",
		"userId": 1
	}
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
