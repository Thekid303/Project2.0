const router = require("express").Router();
const { User } = require("../../models")

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


///////////////////////
//                   //
//    GET ALL USER   //
//                   //
///////////////////////

// GET -> -> http://localhost:3001/dashboard <- <- GET //
// async before a function means one thing --- always returns a promise.
router.get("/", async (req, res) => {
    //Rest Arc Patter
    try {
      // search the database and findAll Project(s)
      const postData = await User.findAll({
        // where: {
        //   user_id: 1,
        // },
      });
      console.log(postData)
      // We use .get({ plain: true }) on the object (postData) to serialize to get all project(s)
      const employee = postData.map(user => employee.get({ plain: true }));
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
