const route = require("express").Router();

route.get("/register", (req, res) => {
    res.render("register", { title: "Register Page" });
});

route.post("/register", (req, res) => {

})

module.exports = route;