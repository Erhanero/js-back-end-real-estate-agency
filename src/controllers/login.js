const route = require("express").Router();

route.get("/login", (req, res) => {
    res.render("login", { title: "Login Page" });
});

route.post("/login", (req, res) => {

})

module.exports = route;