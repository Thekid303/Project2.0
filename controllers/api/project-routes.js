const router = require('express').Router();
const { Project } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
