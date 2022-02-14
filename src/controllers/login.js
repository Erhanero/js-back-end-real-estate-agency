const router = require("express").Router();
const authService = require("../services/auth");
const { isAuth, isGuest } = require("../middlewares/authMiddleware")

router.get("/login", isGuest, (req, res) => {
    res.render("login", { title: "Login Page" });
});

router.post("/login", isGuest, async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.cookie("app-token", token, { httpOnly: true });
        res.redirect("/");
    } catch (err) {
        console.log(err.message);

    }
});

router.get("/logout", isAuth, (req, res) => {
    res.clearCookie("app-token");

    res.redirect("/");
})

module.exports = router;