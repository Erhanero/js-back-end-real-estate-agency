const express = require("express");
const hbs = require("express-handlebars");
const app = express();

app.get("/", (req, res) => {
    res.render("home")
});

app.engine("hbs", hbs.create({
    extname: ".hbs"
}).engine);
app.set("view engine", "hbs");



app.listen(5000, () => console.log("Application is running on http://localhost:5000"));