const router = require("express").Router();
const houseService = require("../services/house")
router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    const { name, type, year, city, homeImage, description, availablePieces } = req.body;
    await houseService.create({ name, type, year, city, homeImage, description, availablePieces });

    res.redirect("/")
})
module.exports = router;