const router = require("express").Router();
const { Project, User, Comment } = require("../models/index");
const withAuth = require("../utils/auth");

////////////////////////
//                    //
//    GET HOMEPAGE    //
//                    //
////////////////////////
// GET -> -> http://localhost:3001/dashboard <- <- GET //
router.get("/", async (req, res) => {
  //get request to localhost:3001/
  res.render("mainDashboard", { loggedInUser: req.session.loggedIn }); //will respond with the rendered home handlebars template
});

//////////////////////////////
//                          //
//    GET EMPLOYEES PAGE    //
//                          //
//////////////////////////////
// GET -> -> http://localhost:3001/api/user <- <- GET //
router.get('/user', (req, res) => {
    res.render('employee', { loggedInUser: req.session.loggedIn });
});


/////////////////////////////
//                         //
//    GET PROJECTS PAGE    //
//                         //
/////////////////////////////
// GET -> -> http://localhost:3001/api/projects <- <- GET //
router.get('/projects', (req, res) => {
    res.render('projects',  { loggedInUser: req.session.loggedIn });
});

//////////////////////////
//                      //
//    GET TASKS PAGE    //
//                      //
//////////////////////////
// GET -> -> http://localhost:3001/api/tasks <- <- GET //
router.get('/tasks', (req, res) => {
    res.render('tasks');
});



module.exports = router;
