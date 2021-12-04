const router = require('express').Router();

const userRoutes = require('./user-routes');
const petRoutes = require('./pet-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/pet', petRoutes);
router.use('/message', messageRoutes);

module.exports = router;
