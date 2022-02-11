
const route = require("express").Router();

route.get("/login", (req, res) => {
    res.render("login");
});

route.post("/login", (req, res) => {

})

module.exports = route;