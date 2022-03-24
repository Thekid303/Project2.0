const router = require('express').Router();
const { Project } =require('../../models/Project');
const withAuth = require('../../utils/auth');

////////////////////////////
//                        //
//    GET ALL PROJECTS    //
//                        //
////////////////////////////




/////////////////////////////
//                         //
//    GET PROJECT BY ID    //
//                         //
/////////////////////////////




////////////////////////////
//                        //
//    POST NEW PROJECT    //
//                        //
////////////////////////////
router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            userId: req.session.userID
        })
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;