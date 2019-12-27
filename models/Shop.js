const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ShopSсhema = Schema({
  areas: { type: Schema.Types.ObjectId, ref: "area" },
  address: String,
  shop_code: String
});

module.exports = Shop = mongoose.model("shop", ShopSсhema);
