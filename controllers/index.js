const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes');
const projectRoutes = require('./api/projectRoutes');
const userRoutes = require('./api/userRoutes');

router.use('/', homeRoutes);
router.use('/projects', projectRoutes);
router.use('/api', apiRoutes);

module.exports = router;