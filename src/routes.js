const route = require("express").Router();

const router = require("./controllers/home");
const homeController = require("./controllers/home");
const loginController = require("./controllers/login");
const registerController = require("./controllers/register");
const createController = require("./controllers/create");
const housingController = require("./controllers/housing");

route.use(homeController);
route.use(loginController);
router.use(registerController);
router.use(createController);
router.use(housingController);

route.use("*", (req, res) => {
    res.render("404");
})
module.exports = route;
