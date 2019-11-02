const jwt = require("jsonwebtoken");
const config = require("../config/keys").jwtSecret;

module.exports = function(req, res, next) {
  // Get token from Header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorisation denied" });
  }

  //Verify the token
  try {
    const decoded = jwt.verify(token, config);

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
