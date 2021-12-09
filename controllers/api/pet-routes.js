const router = require('express').Router();
const { User, Pet, Message } = require('../../models');
// const withAuth = require('../../utils/auth');

// Find all pets
router.get('/', async (req, res) => {
	try {
		const petData = await Pet.findAll({
			include: [{ model: User }, { model: Message }],
		});
		res.status(200).json(petData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:petType', async (req, res) => {
	try {
		const petData = await Pet.findAll({
			where: { petType: req.params.petType },
			include: [{ model: User }, { model: Message }],
		});
		res.status(200).json(petData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Find pet by id
router.get('/:id', async (req, res) => {
	try {
		const petData = await Pet.findByPk(req.params.id, {
			include: [{ model: User }, { model: Message }],
		});

		if (!petData) {
			res.status(404).json({ message: 'No pet found with this id!' });
			return;
		}

		res.status(200).json(petData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Create new pet 
router.post('/', async (req, res) => {
	try {
		const petData = await Pet.create({
			petName: req.body.petName,
			breed: req.body.breed,
			description: req.body.description,
			age: req.body.age,
			picture: req.body.picture,
			petType: req.body.petType,
			userId: req.session.userId
		});

		req.session.save(() => {
			req.session.loggedIn = true;

			res.status(200).json(petData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Update a pet by id
router.put('/:id', async (req, res) => {
	try {
		const petData = await Pet.update(
			{
				petName: req.body.petName,
				breed: req.body.breed,
				description: req.body.description,
				age: req.body.age,
				picture: req.body.picture,
				petType: req.body.petType,
			},
			{
				where: { id: req.params.id }
			});
		if (!petData) {
			res.status(404).json({ message: 'No pet with this id!' });
			return;
		}
		res.status(200).json(petData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a pet by id
router.delete('/:id', async (req, res) => {
	try {
		const petData = await Pet.destroy({
			where: {
				id: req.params.id
			}
		});
		if (!petData) {
			res.status(404).json({ message: 'No pet with this id!' });
			return;
		}
		res.status(200).json(petData);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;
