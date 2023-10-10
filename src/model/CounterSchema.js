const mongoose = require("mongoose");

const schema = mongoose.Schema({
	counter: Number,
})

module.exports = mongoose.model("Counter", schema)