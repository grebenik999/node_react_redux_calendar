const express = require("express");
const router = express.Router();

// Regions model
const Region = require("../../models/Regions");

// @route  POST api/location/region
// @desc   Create new Region
// @access public
router.post("/region", (req, res) => {
  const newRegion = new Region({
    name: req.body.name
  });

  newRegion.save().then(region => res.json(region));
});

// @route  GET api/location/region
// @desc   GET all Region
// @access public

router.get("/region", (req, res) => {
  Region.find().then(regions => {
    return res.json(regions);
  });
});

// @route  GET api/location/region/:id
// @desc   GET single Region
// @access public

router.get("/region/:id", (req, res) => {
  Region.findById(req.params.id).then(region => {
    return res.json(region);
  });
});

// @route  PUT api/location/region/:id
// @desc   Update the Region
// @access public

router.put("/region/:id", (req, res) => {
  // Validate Request
  if (!req.params.id) {
    return res.status(400).send({
      message: "Cannot find the Region"
    });
  }
  // needs to update the Region by Id
  // and return all Regions to client
  Region.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name
    },
    { new: true }
  ).then(region => {
    if (!region) {
      return res.status(404).send({
        message: "Region not found with id " + req.params.id
      });
    }

    res.send(region);
  });
});

module.exports = router;
