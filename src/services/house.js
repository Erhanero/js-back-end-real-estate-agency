const House = require("../models/House");

async function create(house) {
    try {
        await House.create(house);

    } catch (err) {
        console.log(err.message)
    }

}

module.exports = {
    create
}