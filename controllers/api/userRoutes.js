const router = require("express").Router();
const { User } = require('../../models')

router.post('/login', async (req, res) => {
  // console.log(req.body)

  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user)

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Invalid password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: 'No user account found!' });
  }
});

router.post('/signup', async (req, res) => {
    // console.log("starting")

    try {
        const newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });

        // console.log(newUser)
        req.session.save(() => {
          req.session.userId = newUser.id;
          req.session.username = newUser.username;
          req.session.loggedIn = true;
          // console.log(req.session)
          res.status(200).json(newUser);
        });
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
})

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json('hello')
})


///////////////////////
//                   //
//    GET ALL USER   //
//                   //
///////////////////////

// GET -> -> http://localhost:3001/api/users <- <- GET //
// async before a function means one thing --- always returns a promise.
router.get("/", async (req, res) => {
    //Rest Arc Patter
    try {
      // search the database and findAll Project(s)
      const postData = await User.findAll();
      console.log(postData)
      // We use .get({ plain: true }) on the object (postData) to serialize to get all project(s)
      const employee = postData.map(user => user.get({ plain: true }));
      console.log(employee);
      // Then, the 'all-project' template is rendered and projects information is passed into the dashboard template.
      res.render("all-employee", {
        // Then, the 'all-project' handlebar template is rendered
        layout: "dashboard", // and projects information is passed into the
        employee, // dashboard handlebar template.
      });
    } catch (err) {
      console.log(err)
    }
  });

module.exports = router;

