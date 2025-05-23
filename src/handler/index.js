const { registerUserHandler } = require("./registerUser");
const { fetchUserHandler } = require("./fetchUser");
const { fetchUsersHandler } = require("./fetchUsers");
const { deleteUserHandler } = require("./deleteUser");

module.exports = {
  registerUserHandler,
  fetchUserHandler,
  fetchUsersHandler,
  deleteUserHandler,
};
