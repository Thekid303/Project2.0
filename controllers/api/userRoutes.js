const router = require('express').Router();
const { restart } = require('nodemon');
const { User } =require('../../models/User');


router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            user_firstName: req.body.user_firstName,
            user_latName: req.body.user_lastName,
            userId: req.session.userID
        })
        
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.user_firstName = newUser.user_firstName;
            req.session.user_lastName = newUser.user_lastName;
            req.session.loggedIn = true;

            res.json(newUser)
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.post('/login', async, (req, res) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 user_firstName: req.body.user_firstName,
//                 user_lastName: req.body.user_lastName
//             }
//         })

//         if(!user) {
//             res.status(400).json({ message: "no user account found!" })
//             return;
//         }

//         const validPassword = user.checkPassword(req.body.password);

//         if(!validPassword) {
//             res.status(400).json({ message: "incorrect password, please try again!" })
//         }

//         req.session.save(() => {
//             req.session.userID = user.id;
//             req.session.user_firstName = user.firstName;
//             req.session.user_lastName = user.lastName;
//             req.session.loggedIn = true;

//             res.json({ user, message: "You are now logged in!" })
//         })
//     } catch (err) {
//         res.status(400).json({ message: "NO user account found, Please try again!"})
//     }
// });

// router.post('/logout', (req, res) => {
//     if(req.session.loggedIn) {
//         res.status(204).end();
//     }
// });



module.exports = router;