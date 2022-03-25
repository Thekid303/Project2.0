const router = require('express').Router();
const userRoutes = require('./userRoutes')
const projectRoutes = require('./projectRoutes')
const taskRoutes = require('./taskRoutes')

//////////////////////
//                  //
//    MIDDLEWARE    //
//                  //
//////////////////////
router.use('/user', userRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);


module.exports = router;