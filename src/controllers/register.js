const router = require("express").Router();
const authService = require("../services/auth");
const { isGuest } = require("../middlewares/authMiddleware")

router.get("/register", isGuest, (req, res) => {
    res.render("register", { title: "Register Page" });
});

router.post("/register", async (req, res) => {

    const { name, username, password, repeatPassword } = req.body;
    if (password != repeatPassword) {
        res.locals.error = "Password's don't matched!";
        return res.render("register");
    }

    try {
        await authService.register({ name, username, password });
        res.redirect("/");
    } catch (err) {
        console.log(err.message)
    }

    res.redirect("/login");
})

module.exports = router;