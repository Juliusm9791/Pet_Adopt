const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');


// GET all info for homepage
router.get('/', async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: Comment }, { model: User }],
    });

    const allInfo = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', { allInfo, loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET user info for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const allInfo = userData.get({ plain: true });
    res.render('dashboard', {
      ...allInfo,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET post info by id for dashboard
router.get('/dashboard/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, exclude: ['password'] },],
    });

    const allInfo = postData.get({ plain: true });
    res.render('updatepost', { allInfo, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard/addpost', async (req, res) => {
  try {
    res.render('addpost', { loggedIn: req.session.loggedIn, userId: req.session.userId });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET post info by id for add comment
router.get('/addcomment/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, exclude: ['password'] }, { model: Comment }],
    });

    const allInfo = postData.get({ plain: true });
    res.render('addcomment', { ...allInfo, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
