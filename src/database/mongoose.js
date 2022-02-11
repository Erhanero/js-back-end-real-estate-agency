const mongoose = require("mongoose");
const connectionString = "mongoose://localhost:27017/real-estate-db"

async function initDatabase() {
    await mongoose.connect(connectionString);

}