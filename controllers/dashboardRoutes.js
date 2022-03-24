const router = require("express").Router();
const { Project, User, Comment } = require("../models/index");
const withAuth = require('../utils/auth');


///////////////////////////////////////////
//                                       //
//    GET ALL PROJECTS WHEN LOGGED IN    //
//                                       //
///////////////////////////////////////////
// GET -> -> http://localhost:3001/dashboard <- <- GET //
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Project.findAll({
            where: {
                userID: req.session.userID,
            },
        });

        const projects = postData.map((project) => project.get({ plain:true }));
        
        res.render('all-project', {
            layout: 'dashboard',
            projects,
        })
    } catch (err) {
        res.redirect('signup')
    }
});

/////////////////////////////
//                         //
//    ADD A NEW PROJECT    //
//                         //
/////////////////////////////
// POST -> -> http://localhost:3001/dashboard/new-project <- <- POST //
router.post('/new-project', withAuth, (req, res) => {
    res.render('new-project', {
        layout: 'dashboard',
    });
});

////////////////////////////
//                        //
//    ADD NEW EMPLOYEE    //
//                        //
////////////////////////////
// POST -> -> http://localhost:3001/dashboard/new-employee <- <- POST //
router.post('/new-employee', withAuth, (req, res) => {
    res.render('new-employee', {
        layout: 'dashboard',
    });
});

///////////////////////////////////////////////////
//                                               //
//    ADD TASK/COMMENT TO AN EXISTING PROJECT    //
//                                               //
///////////////////////////////////////////////////
// POST -> -> http://localhost:3001/dashboard/new-task <- <- POST //
router.post('/new-task', withAuth, (req, res) => {
    // we need to link the userID and projectID with the task
    // .then render only userName (= user.firstName + user.lastName) projectName and comment or task
})
module.exports = router;