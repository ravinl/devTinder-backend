const { userModel } = require("../model/user");

const deleteUserHandler = async (req, res) => {
  console.log(req.body); // TODO: remove this console
  const userEmail = req.body.email; // TODO: use id for fetching users

  try {
    const deletedUser = await userModel.findOneAndDelete({ email: userEmail });

    if (!deletedUser || deletedUser.length === 0) {
      res.status(404).json({
        success: false,
        message: `User not found`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `${deletedUser.name} hope we had good time together, eager to see you soon again in sometimes!!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!!",
    });
  }
};

module.exports = { deleteUserHandler };
