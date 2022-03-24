const withAuth = (req, res, next) => {
    if (!req.session.userID) {
        res.redirect("/main")
    } else {
        next();
    }
};

module.exports = withAuth