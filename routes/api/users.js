const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const config = require("../../config/keys").jwtSecret;
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// User model
const User = require("../../models/User");

// @route  POST api/users
// @desc   Register user
// @access public
router.post(
  "/",
  [
    check("name", "Обязательное поле")
      .not()
      .isEmpty(),
    check("email", "Пожалуйста напишите валидный email").isEmail(),
    check(
      "password",
      "Пароль Обязателен и должен содержать не менее 6 символов"
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, position, card } = req.body;

    try {
      //See if user exist
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg:
                "Такой пользователь уже существует, пожалуйста введите другое имя или email..."
            }
          ]
        });
      }

      // Set a default gravatar to user
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        password,
        avatar,
        position,
        card
      });

      //Encrypt a password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save a user to DB
      await user.save();

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
