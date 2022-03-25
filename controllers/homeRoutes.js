const router = require("express").Router();
const { Project, User, Comment } = require("../models/index");

////////////////////////
//                    //
//    GET HOMEPAGE    //
//                    //
////////////////////////
// GET -> -> http://localhost:3001/ <- <- GET //
router.get("/", async (req, res) => {
  res.render("home")
  // (path.join(__dirname, '../views/layouts/main'));
});

//////////////////////////
//                      //
//    GET LOGIN PAGE    //
//                      //
//////////////////////////
// GET -> -> http://localhost:3001/login <- <- GET //
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('./');
        return;
    }
    res.render('login');
});

//////////////////////////
//                      //
//    GET SIGNUP PAGE    //
//                      //
//////////////////////////
// GET -> -> http://localhost:3001/signup <- <- GET //
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('./');
      return;
  }
  res.render('signup');
});

module.exports = router;
