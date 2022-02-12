const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre("save", async function (next) {
    const hashedPassword = await bcrypt.hash(this.password, 10)

    this.password = hashedPassword;
    next();
});

userSchema.method("comparePassword", async function (password) {
    return await bcrypt.compare(password, this.password)
})

const User = mongoose.model("User", userSchema);

module.exports = User;