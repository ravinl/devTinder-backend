const { registerUserHandler } = require("./registerUser");
const { fetchUserHandler } = require("./fetchUser");
const { fetchUsersHandler } = require("./fetchUsers");
const { deleteUserHandler } = require("./deleteUser");
const { updateUserInfoHandler } = require("./updateUserInfo");

module.exports = {
  registerUserHandler,
  fetchUserHandler,
  fetchUsersHandler,
  deleteUserHandler,
  updateUserInfoHandler,
};
