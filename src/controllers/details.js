const router = require("express").Router();
const { getById } = require("../services/house");

router.get("/details/:houseId", async (req, res) => {
    const house = await getById(req.params.houseId);
    if (!req.user) {
        return res.render("details", { house })
    }

    const isOwner = house.owner == req.user._id;
    res.render("details", { house, isOwner });
});

module.exports = router;