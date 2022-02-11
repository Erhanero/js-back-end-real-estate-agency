const route = require("express").Router();
const authService = require("../services/auth");

route.get("/register", (req, res) => {
    res.render("register", { title: "Register Page" });
});

route.post("/register", async (req, res) => {
    const { name, username, password, repeatPasswod } = req.body;
    await authService.register({ name, username, password });

    res.redirect("/login")
})

module.exports = route;