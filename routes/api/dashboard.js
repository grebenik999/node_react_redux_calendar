const express = require("express");
const router = express.Router();

// @route  GET api/dashboard
// @desc   Dashboard route
// @access public
router.get("/", (req, res) => {
  res.send("Dashboard route");
});
module.exports = router;
