const router = require('express').Router();
const { User, Pet, Message } = require('../models');
const withAuth = require('../utils/auth');


// GET all info for allpets
router.get('/allpets', async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      include: [{ model: User }, { model: Message }],
    });

    const allPets = petsData.map((user) => user.get({ plain: true }));
    // console.log(allPets)
    res.render('allpets', { allPets, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET pets info
router.get('/mypets', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: { model: Pet, include: {model: Message}},
    });

    const userInfo = userData.get({ plain: true });

    // console.log(userInfo)
    res.render('mypets', {
      ...userInfo,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET pet info
router.get('/allpets', async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [{ model: Message }, { model: User, exclude: ['password'] },],
    });

    const allPets = petData.map(pet => pet.get({ plain: true }));
    // console.log(petInfo)
    res.render('allpets', { allPets, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/allpets/:petType', async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: { petType: req.params.petType },
      include: [
        { model: Message },
        { model: User, exclude: ['password'] },
      ],
    });


    const allPets = petData.map(pet => pet.get({ plain: true }));
    // console.log(petData)
    res.render('allpets', { allPets, loggedIn: req.session.loggedIn, petType: req.params.petType, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET pet info by id 
router.get('/allpets/pet/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: Message }, { model: User, exclude: ['password'] },],
    });

    const petInfo = petData.get({ plain: true });
    // console.log(petInfo)
    res.render('seeonepet', { ...petInfo, loggedIn: req.session.loggedIn, petType: req.params.petType, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


router.get('/mypets/update/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: Message }, { model: User, exclude: ['password'] },],
    });

    const petInfo = petData.get({ plain: true });
    console.log(petInfo)
    res.render('mypetupadat', { ...petInfo, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/mypets/messages/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: Message }, { model: User, exclude: ['password'] },],
    });

    const petInfo = petData.get({ plain: true });
    console.log(petInfo)
    res.render('mypetmessages', { ...petInfo, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/mypets/addpet', withAuth, async (req, res) => {
  try {
    res.render('addpet', { loggedIn: req.session.loggedIn, userId: req.session.userId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/aboutus', (req, res) => {
  res.render('aboutus', { loggedIn: req.session.loggedIn });
});

// Log in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;