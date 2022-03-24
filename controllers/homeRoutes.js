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

//////////////////////////////////////
//                                  //
//    GET A SINGLE PROJECT BY ID    //
//                                  //
//////////////////////////////////////
// GET -> -> http://localhost:3001/{ID} <- <- GET //
// router.get("./project/:id", async (req, res) => {
//   try {
//     const postData = await Project.findByPk(req.params.id, {
//       include: [
//         User,
//         {
//           model: Comment,
//           include: [User],
//         },
//       ],
//     });

//     if (postData) {
//       const project = postData.get({ plain: true });
//       res.render("single-project", { project });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//////////////////////////
//                      //
//    GET LOGIN PAGE    //
//                      //
//////////////////////////
// GET -> -> http://localhost:3001/login <- <- GET //
router.get('./login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('./');
        return;
    }
    res.render('signup');
});

module.exports = router;
