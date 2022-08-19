const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  const User_Model = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  };
  try {
    const user = await User.create(User_Model);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { createUser };
