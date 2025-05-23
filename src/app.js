const express = require("express");
const { connectDB } = require("./dataBase/connection");
const {
  registerUserHandler,
  fetchUserHandler,
  fetchUsersHandler,
} = require("./handler/index");

const server = express();
const PORT = 3000;

// Middleware to parse JSON requests
server.use(express.json());

// API routes
server.post("/api/v1/sign_up", registerUserHandler);
server.get("/api/v1/user", fetchUserHandler); // TODO: use login authentication middleware before fetching the data
server.get("/api/v1/users", fetchUsersHandler); // TODO: use admin authentication middleware before fetching the data

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process with failure
  });
