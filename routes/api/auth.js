const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const config = require("../../config/keys").jwtSecret;
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route  GET api/auth
// @desc   Test auth
// @access public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route  POST api/auth
// @desc   Authenticated User & get token
// @access public
router.post(
  "/",
  [
    check("email", "Пожалуйста напишите валидный email").isEmail(),
    check("password", "Пароль Обязателен").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //See if user exist
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: "Данные которые Вы ввели не правильные..."
            }
          ]
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: "Данные которые Вы ввели не правильные..."
            }
          ]
        });
      }

      //Return JSONJWSToken
      const payload = {
        user: {
          id: user.id
        }
      };
      // change ExpiresIn to 3600 for production site
      jwt.sign(payload, config, { expiresIn: 360000 }, (err, token) => {
        console.log("Token", token);
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
