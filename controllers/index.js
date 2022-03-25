const router = require('express').Router();


const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./api/dashboardRoutes')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;