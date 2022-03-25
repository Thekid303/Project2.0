const router = require("express").Router();
const { User } = require('../../models')

router.post('/login', (req, res) => {
    // User.find where email = req.body.email
    // if password = user.password
    // res.status(200)
    // req.session.user = user.id -- store the session id
    res.status(200).json('hello')
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
            console.log(req.session)
          res.status(200).json(newUser);
        });
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
})

router.post('/logout', (req, res) => {
    res.status(200).json('hello')
})

module.exports = router;
