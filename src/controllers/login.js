const router = require("express").Router();
const authService = require("../services/auth");

router.get("/login", (req, res) => {
    res.render("login", { title: "Login Page" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.cookie("app-token", token, { httpOnly: true });
        res.redirect("/");
    } catch (err) {
        console.log(err.message);

    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("app-token");

    res.redirect("/");
})

module.exports = router;