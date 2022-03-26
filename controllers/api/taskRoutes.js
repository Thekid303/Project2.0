const router = require("express").Router();
const { Task, Project } = require("../../models");

////////////////////////
//                    //
//    GET ALL TASKS   //
//                    //
////////////////////////

// GET -> -> http://localhost:3001/api/tasks <- <- GET //
// async before a function means one thing --- always returns a promise.
router.get("/", async (req, res) => {
    //Rest Arc Patter
    try {
      // search the database and findAll Project(s)
      const postData = await Task.findAll({
      include: [
        {
          model: Project,
          attributes: ['id', 'name'],
        },
      ],
      });
      console.log(postData)
      // We use .get({ plain: true }) on the object (postData) to serialize to get all project(s)
      const tasks = postData.map(task => task.get({ plain: true }));
      console.log(tasks);
      // Then, the 'all-project' template is rendered and projects information is passed into the dashboard template.
      res.render("all-tasks", {
        loggedInUser: req.session.loggedIn,
        // Then, the 'all-project' handlebar template is rendered
        layout: "dashboard",    // and projects information is passed into the
        tasks,
                           // dashboard handlebar template.
      });
    } catch (err) {
      console.log(err)
    }
});


// router.get('/', async (req, res) => {
//   res.render('all', {Task});
// });

// router.get('/tasks/:num', async (req, res) => {
//   return res.render('task', Task[req.params.num - 1]);
// });

module.exports = router;