const express = require("express");
const hbs = require("express-handlebars");
const { PORT } = require("./constants");
const routeController = require("./routes");
const initDatabase = require("./database/mongoose");
const app = express();



app.engine("hbs", hbs.create({
    extname: ".hbs"
}).engine);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.static("src"));

app.use(routeController);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`Application is running on http://localhost:${PORT}`));

    })
    .catch(err => {
        console.log(err, "Cannot connect database")
    })

