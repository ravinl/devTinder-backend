const { userModel } = require("../model/user");

const fetchUsersHandler = async (req, res) => {
  try {
    const users = await userModel.find({});

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Total ${users.length} users found`,
        users: users,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong!!",
    });
  }
};

module.exports = { fetchUsersHandler };
