const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const projectRoutes = require('./project-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/project', projectRoutes);

module.exports = router;