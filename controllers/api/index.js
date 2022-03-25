const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

//////////////////////
//                  //
//    MIDDLEWARE    //
//                  //
//////////////////////
router.use('/dashboard', dashboardRoutes);

module.exports = router;