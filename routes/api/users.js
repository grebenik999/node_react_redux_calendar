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

    const { name, email, position, password, card } = req.body;

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

      // Set a default user role
      const role = "user";

      user = new User({
        name,
        email,
        password,
        avatar,
        position,
        role,
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

// @route  GET api/users
// @desc   GET all users
// @access public

router.get("/", (req, res) => {
  User.find().then(users => {
    return res.json(users);
  });
});

// @route  GET api/users
// @desc   GET single users
// @access public

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then(user => {
    return res.json(user);
  });
});

// @route  PUT api/users
// @desc   Update the user
// @access public

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }).then(user => {
    if (user) {
      user.save();
      return res.json(user);
    }
  });
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    if (user) {
      user.delete();
    }
  });
  return res.send("Deleted");
});

// router.put(
//   "/",
//   [
//     check("name", "Обязательное поле")
//       .not()
//       .isEmpty(),
//     check("email", "Пожалуйста напишите валидный email").isEmail()
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, position, password, role, card } = req.body;

//     try {
//       //See if user exist
//       let user = await User.find(id);
//       if (user) {
//         user = new User({
//           name,
//           email,
//           password,
//           avatar,
//           position,
//           role,
//           card
//         });

//         // Save a user to DB
//         await user.save();
//       } else {
//         res.status(500).send("Account not found.");
//       }
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Account not found.");
//     }
//   }
// );

module.exports = router;
