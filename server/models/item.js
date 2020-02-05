const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	todo: String,
	status: String
});

const ItemModel = mongoose.model("items", itemSchema);

module.exports = ItemModel;
