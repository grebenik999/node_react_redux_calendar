const express = require("express");
const router = express.Router();

// Models
const Shop = require("../../models/Shop");
const Area = require("../../models/Areas");

// @route  POST /region/area/shops
// @desc   Create new Shop for current Area
// @access public
router.post("/region/area/shops", (req, res) => {
  const newShop = new Shop({
    areas: req.body.area,
    address: req.body.address,
    shop_code: req.body.shop_code
  });
  newShop.save(async function(err) {
    if (err) return json.send("You have the error: " + err);
    // Get Area
    const area = await Area.findById(req.body.area);
    area.shops.push(newShop);
    // Save Area with curent shop
    await area.save();
  });
  res.status(201).json(newShop);
});

// @route  GET /region/area
// @desc   GET all areas from a certain region
// @access public

router.get("/region/area/shops", async (req, res) => {
  await Shop.find({ areas: req.body.area })
    .populate("area")
    .exec(function(err, shops) {
      if (err)
        return json.send(`Cant get the shop from the current area ${err}`);
      res.status(201).json(shops);
    });
});

module.exports = router;
