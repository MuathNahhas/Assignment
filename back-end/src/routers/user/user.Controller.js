const User = require("../../model/user.model");

const getUserById = (req, res) => {
  const userId = req.token.userId;
  User.findOne({ where: { id: userId } })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          massage: "user not found ",
        });
      }
      return res.status(200).json({
        massage: "success",
        result: result,
      });
    })
    .catch((err) => {
      throw err;
    });
};
const DeleteUserById = async (req, res) => {
  const userId = req.token.userId;
  await User.destroy({
    where: {
      id: userId,
    },
  })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "user was deleted",
      });
    })
    .catch((err) => {
      throw err;
    });
};

const updateUser = async (req, res) => {
  const userId = req.token.userId;
  const { last_name } = req.body;
  await User.update(
    { last_name: last_name },
    {
      where: {
        id: userId,
      },
    }
  )
    .then(async () => {
      let result = await User.findOne({ where: { id: userId } });

      res.status(200).json({
        success: true,
        message: "user was updated",
        result: result,
      });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { getUserById, DeleteUserById, updateUser };
