const router = require("express").Router();
const { Project, User, Comment } = require("../models/index");

//////////////////////////////////////////
//                                      //
//    GET ALL PROJECTS FROM HOMEPAGE    //
//                                      //
//////////////////////////////////////////
router.get("/", async (req, res) => {
  try {
    const postData = await Project.findAll({
      include: [User],
    });

    const projects = postData.map(project => project.get({ plain: true }));

    res.render("all-projects", { projects });
  } catch (err) {
    res.status(500).json(err);
  }
});

//////////////////////////////////////
//                                  //
//    GET A SINGLE PROJECT BY ID    //
//                                  //
//////////////////////////////////////
router.get("./project/:id", async (req, res) => {
  try {
    const postData = await Project.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const project = postData.get({ plain: true });
      res.render("single-project", { project });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('./login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('./');
        return;
    }
    res.render('signup');
});

module.exports = router;
