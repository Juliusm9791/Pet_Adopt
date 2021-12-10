const { Pet } = require('../models');

const petData = [
	{
		"petName": "Fluffy",
		"breed": "Yorkie",
		"petType": "Dog",
		"description": "Small energetic puppy",
		"age": 1,
		"picture": "/images/one.jpg",
		"userId": 1

	},
	{
		"petName": "Arthur",
		"breed": "Domestic short-hair",
		"petType": "Cat",
		"description": "White and black indoor adult cat",
		"age": 2,
		"picture": "/images/two.jpg",
		"userId": 2
	},
	{
		"petName": "Gwen",
		"breed": "Domestic short-hair",
		"petType": "Cat",
		"description": "Black and white indoor adult cat",
		"age": 3,
		"picture": "/images/three.jpg",
		"userId": 3
	},
	{
		"petName": "Blue",
		"breed": "Blue Nose Pitbull",
		"petType": "Dog",
		"description": "Young playful pitbull",
		"age": 1,
		"picture": "/images/four.jpg",
		"userId": 1
	},
	{
		"petName": "Winston",
		"breed": "English Bulldog",
		"petType": "Dog",
		"description": "Adult english bulldog well-trained",
		"age": 5,
		"picture": "/images/five.jpg",
		"userId": 2
	},
	{
		"petName": "Duke",
		"breed": "Great Dane",
		"petType": "Dog",
		"description": "Large loveable great dane puppy",
		"age": 1,
		"picture": "/images/six.jpg",
		"userId": 3
	},
	{
		"petName": "Sammi",
		"breed": "Mixed",
		"petType": "Cat",
		"description": "Short-hair indoor/outdoor cat",
		"age": 3,
		"picture": "/images/seven.jpg",
		"userId": 1
	},
	{
		"petName": "Roby",
		"breed": "Parakeet",
		"petType": "Bird",
		"description": "Beautiful green parakeet",
		"age": 3,
		"picture": "/images/eight.jpg",
		"userId": 2
	}

];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;
