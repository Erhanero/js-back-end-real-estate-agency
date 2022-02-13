const router = require("express").Router();

router.get("/housing", (req, res) => {
    res.render("housing");
});

module.exports = router