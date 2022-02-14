const router = require("express").Router();
const houseService = require("../services/house");

router.get("/edit/:houseId", async (req, res) => {
    let house = await houseService.getById(req.params.houseId);
    house = house.toObject();
    res.render("edit", { ...house });
});

router.post("/edit/:houseId", async (req, res) => {
    try {
        const data = req.body;
        await houseService.updateById(req.params.houseId, data);
        res.redirect(`/details/${req.params.houseId}`)

    } catch (err) {
        console.log(err.message)
    }

})

module.exports = router;