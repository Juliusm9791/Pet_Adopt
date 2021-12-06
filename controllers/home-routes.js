const router = require('express').Router();
const { User, Pet, Message } = require('../models');
const withAuth = require('../utils/auth');


// GET all info for homepage
router.get('/allpets', async (req, res) => {
  try {
    const petsData = await Pet.findAll({
      include: [{ model: User }, { model: Message }],
    });

    const allPets = petsData.map((user) => user.get({ plain: true }));
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
      include: [{ model: Pet }, { model: Message }],
    });

    const userInfo = userData.get({ plain: true });
    res.render('mypets', {
      ...userInfo,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET post info by id for dashboard
// router.get('/dashboard/post/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [{ model: User, exclude: ['password'] },],
//     });

//     const allInfo = postData.get({ plain: true });
//     res.render('updatepost', { allInfo, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/dashboard/addpost', async (req, res) => {
//   try {
//     res.render('addpost', { loggedIn: req.session.loggedIn, userId: req.session.userId });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET post info by id for add comment
// router.get('/addcomment/post/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [{ model: User, exclude: ['password'] }, { model: Comment }],
//     });

//     const allInfo = postData.get({ plain: true });
//     res.render('addcomment', { ...allInfo, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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