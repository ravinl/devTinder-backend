const { userModel } = require("../model/user");

const registerUserHandler = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    res.status(201).json({
      message: "User registered successfully",
      data: req.body,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { registerUserHandler };
