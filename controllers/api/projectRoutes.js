const router = require("express").Router();

/////////////////////////////
//                         //
//    ADD A NEW PROJECT    //
//                         //
/////////////////////////////
// POST -> -> http://localhost:3001/dashboard/new-project <- <- POST //
router.post("/new-project", (req, res) => {
  res.render("new-project", {
    // Then, the 'new-project' handlebar template is rendered on the
    layout: "dashboard", // dashboard template
  });
});

// ////////////////////////////
// //                        //
// //    GET ALL PROJECTS    //
// //                        //
// ////////////////////////////
// //
// // GET -> -> http://localhost:3001/dashboard <- <- GET //
// // async before a function means one thing --- always returns a promise.
// router.get("/", withAuth, async (req, res) => {
//   //Rest Arc Patter
//   try {
//     // search the database and findAll Project(s)
//     const postData = await Project.findAll({
//       where: {
//         userID: req.session.userID,
//       },
//     });
//     // We use .get({ plain: true }) on the object (postData) to serialize to get all project(s)
//     const projects = postData.map(project => project.get({ plain: true }));
//     // Then, the 'all-project' template is rendered and projects information is passed into the dashboard template.
//     res.render("all-project", {
//       // Then, the 'all-project' handlebar template is rendered
//       layout: "dashboard", // and projects information is passed into the
//       projects, // dashboard handlebar template.
//     });
//   } catch (err) {
//     res.redirect("signup");
//   }
// });




// ////////////////////////////////////////
// //                                    //
// //    GET ALL PROJECTS BY EMPLOYEE    //
// //                                    //
// ////////////////////////////////////////
// // INCLUDE PROJECT.NAME - COMMENTS - EMPLOYEES TOTAL HOURS ON PROJECT
// //
// // GET -> -> http://localhost:3001/project/{userId} <- <- GET //
// // get one project with serialized data
// // async before a function means one thing --- always returns a promise.
// router.get("./project/:id", async (req, res) => {
//   //Rest Arc Patter
//   try {
//     // search the database for a project with an id that matched params
//     const postData = await Project.findByPk(req.params.userId, {
//       include: [User, { model: Comment }, { model: User }],
//     });
//     if (postData) {
//       //if postData is true (exists)
//       // We use .get({ plain: true }) on the object (postData) to serialize it so that it only includes the data that we need.
//       const projectData = postData.get({ plain: true });

//       res.render("employee-project", {
//         // Then, the 'employee-project' handlebar template is rendered
//         projectData, // and the projectData information is passed into the                     .
//         layout: "dashboard", // dashboard handlebar template
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// /////////////////////////////////
// //                             //
// //    GET ONE PROJECT BY ID    //
// //                             //
// /////////////////////////////////
// // INCLUDE: USERNAME, COMMENTS AND COMMENTS.HOURS
// //
// // GET -> -> http://localhost:3001/project/{ID} <- <- GET //
// // async before a function means one thing --- always returns a promise.
// router.get(".dashboard/project/:id", async (req, res) => {
//   //Rest Arc Patter
//   try {
//     // search the database for a project with an id that matched params (primary ID)
//     const postData = await Project.findByPk(req.params.id, {
//       //model interacts with the DB same as DB SELECT * FROM
//       //
//       include: [{ model: User }, { model: Comment }],
//     });
//     if (postData) {
//       //if postData is true (exists)
//       // We use .get({ plain: true }) on the object (postData) to serialize it so that it only includes the data that we need.
//       const projectData = postData.get({ plain: true });

//       res.render("single-project", {
//         // Then, the 'single-project' handlebar template is rendered
//         projectData, // and the projectData information is passed into the
//         layout: "dashboard", // dashboard handlebar template
//       });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// ///////////////////////////////////////////////////
// //                                               //
// //    ADD TASK/COMMENT TO AN EXISTING PROJECT    //
// //                                               //
// ///////////////////////////////////////////////////
// // POST -> -> http://localhost:3001/dashboard/new-comment <- <- POST //
// router.post("/new-comment", withAuth, (req, res) => {
//   res.render("new-comment"); //will respond with the rendered home handlebars template on the dashboard handlebar template
// });

module.exports = router;
