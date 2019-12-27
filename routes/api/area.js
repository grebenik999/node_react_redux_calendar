const express = require("express");
const router = express.Router();

// Models
const Area = require("../../models/Areas");
const Region = require("../../models/Regions");

// @route  POST /region/:regionId/area
// @desc   Create new Area
// @access public

router.post("/region/area", (req, res) => {
  const newArea = new Area({
    region: req.body.region,
    name: req.body.name
  });
  newArea.save(async function(err) {
    if (err) return json.send("You have the error: " + err);
    // Get Region
    const region = await Region.findById(req.body.region);
    region.areas.push(newArea);
    // Save Region with curent area
    await region.save();
  });
  res.status(201).json(newArea);
});

// @route  GET /region/area
// @desc   GET all areas from a certain region
// @access public

router.get("/region/area", async (req, res) => {
  await Area.find({ region: req.body.region })
    .populate("region")
    .exec(function(err, areas) {
      if (err)
        return json.send(`Cant get the current areas from region ${err}`);
      res.status(201).json(areas);
    });
});

// @route  PUT /region/area/:id
// @desc   PUT update the area
// @access public

router.put("/region/:regionId/area/:areaId", (req, res) => {
  const { regionId, areaId } = req.params;
  console.log("req", req);
});

module.exports = router;
