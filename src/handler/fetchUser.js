const { userModel } = require("../model/user");

const fetchUserHandler = async (req, res) => {
  const userEmail = req.body.email; // TODO: Get email from request param or fix it by providing id to every user

  try {
    const user = await userModel.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: `Hello ${user.name}, here is your profile`,
        userInfo: user,
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

module.exports = { fetchUserHandler };
