const router = require("express").Router();

router.post('/login', (req, res) => {
    // User.find where email = req.body.email
    // if password = user.password
    // res.status(200)
    // req.session.user = user.id -- store the session id
    res.status(200).json('hello')
});

router.post('/signup', (req, res) => {
    res.status(200).json('hello')
})

router.post('/logout', (req, res) => {
    res.status(200).json('hello')
})

module.exports = router;
