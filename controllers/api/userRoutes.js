const router = require("express").Router();

router.post('/login', (req, res) => {
    // User.find where email = req.body.email
    // if password = user.password
    // res.status(200)
    // req.session.user = user.id -- store the session id
    res.status(200).json('hello')
});

router.post('/logout', (req, res) => {
    res.status(200).json('hello')
})

/////////////////////////////
//                         //
//    GET ALL EMPLOYEES    //
//                         //
/////////////////////////////
router.post("/", async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
  
      const employee = userData.map((employee) =>
        employee.get({ plain: true })
      );
  
      res.render("employee", {
        layout: "dashboard",
        employee,
      });
  
    } catch (err) {
  
      console.log(err);
      res.status(500).json(err);
    }
  });















module.exports = router;


