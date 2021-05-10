  
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Home Page
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// View Specific post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]         
        }
      ]
    });    

    const post = postData.get({ plain: true });
    console.log(post);
    console.log(req.session.user_id);
    res.render('post', {
      //spread operator, take post out of the array, spread just takes the info out, destructuring takes specific things out
      ...post,
      logged_in: req.session.logged_in,
      logged_in_user: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// View User Profile
// Use withAuth middleware to prevent access to route
router.get('/userProfile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    res.render('userProfile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/userProfile');
    return;
  }

  res.render('login');
});

// Signup Page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/userProfile');
    return;
  }

  res.render('signup');
});

// Logout Page
router.get('/logout', (req, res) => {
  console.log("Logging Out");
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).redirect("/");
    });
  }else{ 
    res.status(204).redirect("/");
  }
});

module.exports = router;