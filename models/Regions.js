const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const RegionSсhema = new Schema({
  name: String,
  areas: [{ type: Schema.Types.ObjectId, ref: "area" }]
});

module.exports = Region = mongoose.model("region", RegionSсhema);
