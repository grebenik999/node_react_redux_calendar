const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const AreaSchema = new Schema({
  region: { type: Schema.Types.ObjectId, ref: "region" },
  name: String,
  shops: [{ type: Schema.Types.ObjectId, ref: "shop" }]
});

module.exports = Area = mongoose.model("area", AreaSchema);
