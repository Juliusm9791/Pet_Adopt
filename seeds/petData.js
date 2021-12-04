const { Pet } = require('../models');

const petData = [
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 1,
		"picture": "link1",
		"userId": 1

	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 2,
		"picture": "link1",
		"userId": 2
	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 3,
		"picture": "link1",
		"userId": 3
	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 4,
		"picture": "link1",
		"userId": 1
	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 5,
		"picture": "link1",
		"userId": 2
	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 6,
		"picture": "link1",
		"userId": 3
	},
	{
		"petName": "Fluffy",
		"breed": "yorkie",
		"description": "fluffy short hair puppy",
		"age": 7,
		"picture": "link1",
		"userId": 1
	}
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
