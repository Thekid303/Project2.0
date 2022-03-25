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
  res.render("mainDashboard"); //will respond with the rendered home handlebars template
});

//////////////////////////////
//                          //
//    GET EMPLOYEES PAGE    //
//                          //
//////////////////////////////
// GET -> -> http://localhost:3001/dashboard/user <- <- GET //
router.get('/user', (req, res) => {
    res.render('employee');
});


/////////////////////////////
//                         //
//    GET PROJECTS PAGE    //
//                         //
/////////////////////////////
// GET -> -> http://localhost:3001/dashboard/projects <- <- GET //
router.get('/projects', (req, res) => {
    res.render('projects');
});

//////////////////////////
//                      //
//    GET TASKS PAGE    //
//                      //
//////////////////////////
// GET -> -> http://localhost:3001/dashboard/tasks <- <- GET //
router.get('/tasks', (req, res) => {
    res.render('tasks');
});



module.exports = router;
