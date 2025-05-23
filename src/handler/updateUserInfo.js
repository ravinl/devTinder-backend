const { userModel } = require("../model/user");

const updateUserInfoHandler = async (req, res) => {
  const userEmail = req.body.email; // TODO: do this with user id

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { email: userEmail },
      { email: "newemail@gmail.com", name: "New name" }
    );

    if (!updatedUser || updatedUser.length === 0) {
      res.status(404).json({
        success: false,
        message: `User not found!!`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: `${updatedUser.name}, your profile has been updated successfully!!`,
        data: updatedUser,
      });
    }
  } catch (error) {}
};

module.exports = { updateUserInfoHandler };
