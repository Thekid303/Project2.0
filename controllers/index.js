const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');
const projectRoutes = require('./api/projectRoutes');
const userRoutes = require('./api/userRoutes');
const dashboardRoutes = require('./api/dashboardRoutes')

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;