const router = require("express").Router()
const { getLastThree } = require("../services/house");

router.get("/", async (req, res) => {
    const housings = await getLastThree();

    res.render("home", { title: "Home Page", housings });
});

module.exports = router;