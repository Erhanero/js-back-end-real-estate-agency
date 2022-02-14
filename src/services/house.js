const House = require("../models/House");

async function create(house) {
    try {
        await House.create(house);

    } catch (err) {
        console.log(err.message)
    }

}

async function getLastThree() {
    return await House.find().sort({ createdAt: -1 }).limit(3).lean();
}

async function getAll() {
    return await House.find().lean();
}

async function getById(id) {
    return await House.findById(id).populate("tenants");

}

async function rentHouse(houseId, userId) {
    const house = await House.findById(houseId);
    house.availablePieces -= 1;
    house.tenants.push(userId);
    await house.save();

}

module.exports = {
    create,
    getLastThree,
    getAll,
    getById,
    rentHouse
}