const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/real-estate-db"

async function initDatabase() {
    await mongoose.connect(connectionString);

}

module.exports = initDatabase