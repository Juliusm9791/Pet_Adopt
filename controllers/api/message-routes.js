const router = require('express').Router();
const { User, Pet, Message } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all messages
router.get('/', async (req, res) => {
    try {
        const messageData = await Message.findAll({
            include: [{ model: User, exclude: ['password'] }, { model: Pet }],
        });
        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const messageData = await Message.findByPk(req.params.id, {
            include: [{ model: User },{ model: Pet }]
        });

        if (!messageData) {
            res.status(404).json({ message: 'No message found with this id!' });
            return;
        }

        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new message
router.post('/', async (req, res) => {
    try {
        const messageData = await Message.create({
            message_text: req.body.text,
            petId: req.body.petId,
            userId: req.session.userId,
            username: req.session.firstName,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(messageData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
