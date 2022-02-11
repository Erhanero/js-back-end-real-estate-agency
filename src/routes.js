const route = require("express").Router();

const homeController = require("./controllers/home");
const loginController = require("./controllers/login");

route.use(homeController);
route.use(loginController);

route.use("*", (req, res) => {
    res.render("404");
})
module.exports = route;
