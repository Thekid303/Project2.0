const router = require('express').Router();

//////////////////////
//                  //
//    MIDDLEWARE    //
//                  //
//////////////////////
router.use('/dashboard', dashboardRoutes);

module.exports = router;