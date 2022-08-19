const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email: email } })
    .then((result) => {
      if (!result) {
        return res.json("email not found ");
      }
      const valid = bcrypt.compareSync(password, result.password);
      if (!valid) {
        return res.status(404).json("password error");
      } else {
        const payload = {
          userId: result.id,
          email: result.email,
        };
        console.log(payload);
        const SECRET = `${process.env.SECRET}`;
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, SECRET, options);

        return res
          .status(200)
          .json({ success: true, massage: " you logged in", token: token });
      }
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = { login };
