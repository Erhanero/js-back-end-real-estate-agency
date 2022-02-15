const router = require("express").Router();
const houseService = require("../services/house");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/create", isAuth, (req, res) => {
    res.render("create");
});

router.post("/create", isAuth, async (req, res) => {
    const { name, type, year, city, homeImage, description, availablePieces } = req.body;
    await houseService.create({ name, type, year, city, homeImage, description, availablePieces, owner: req.user._id });

    res.redirect("/housing");
})
module.exports = router; 