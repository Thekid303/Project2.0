const router = require('express').Router();
const userRoutes = require('./userRoutes')

//////////////////////
//                  //
//    MIDDLEWARE    //
//                  //
//////////////////////
// router.use('/dashboard', dashboardRoutes);
router.use('/user', userRoutes);

module.exports = router;