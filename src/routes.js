const route = require("express").Router();

const router = require("./controllers/home");
const homeController = require("./controllers/home");
const loginController = require("./controllers/login");
const registerController = require("./controllers/register");

route.use(homeController);
route.use(loginController);
router.use(registerController)

route.use("*", (req, res) => {
    res.render("404");
})
module.exports = route;
