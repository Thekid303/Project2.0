const router = require("express").Router();
const { Project } = require("../../models");
// const { withAuth } = require('../../utils');

/////////////////////////////
//                         //
//    ADD A NEW PROJECT    //
//                         //
/////////////////////////////
// POST -> -> http://localhost:3001/dashboard/new-project <- <- POST //
router.post("/createProject", (req, res) => {
  res.render("createProject", {
    // Then, the 'new-project' handlebar template is rendered on the
    layout: "dashboard", // dashboard template
  });
});

////////////////////////////
//                        //
//    GET ALL PROJECTS    //
//                        //
////////////////////////////

// GET -> -> http://localhost:3001/dashboard <- <- GET //
// async before a function means one thing --- always returns a promise.
router.get("/", async (req, res) => {
  //Rest Arc Patter
  try {
    // search the database and findAll Project(s)
    const postData = await Project.findAll()
    console.log(postData)
    // We use .get({ plain: true }) on the object (postData) to serialize to get all project(s)
    const projects = postData.map(project => project.get({ plain: true }));
    console.log(projects);
    // Then, the 'all-project' template is rendered and projects information is passed into the dashboard template.
    res.render("all-project", { 
      loggedInUser: req.session.loggedIn,
      // Then, the 'all-project' handlebar template is rendered
      layout: "dashboard", // and projects information is passed into the
      projects, // dashboard handlebar template.
    });
  } catch (err) {
    console.log(err)
  }
});

/////////////////////////////
//                         //
//    GET PROJECT BY ID    //
//                         //
/////////////////////////////
// GET -> -> http://localhost:3001/project/1 <- <- GET //

router.get('/:id', async (req, res) => {
  try {
    const postData = await Project.findOne({
      where: {
        id: req.params.id
      }
    })
    // console.log(postData)

    if (postData) {
      const projects = postData.get({ plain: true });
      // console.log(projects)

      res.render('single-project', {
        loggedInUser: req.session.loggedIn,
        layout: 'dashboard',
        projects,
      })
    } else {
      res.status(404).end()
    }
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;