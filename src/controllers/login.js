const route = require("express").Router();
const authService = require("../services/auth");

route.get("/login", (req, res) => {
    res.render("login", { title: "Login Page" });
});

route.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        res.cookie("app-token", token, { httpOnly: true });
        res.redirect("/");
    } catch (err) {
        console.log(err.message);

    }
})

module.exports = route;