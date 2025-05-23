const express = require("express");
const { connectDB } = require("./dataBase/connection");
const { registerUserHandler } = require("./handler/index");

const server = express();
const PORT = 3000;

// Middleware to parse JSON requests
server.use(express.json());

// API routes
server.post("/api/v1/sign_up", registerUserHandler);

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
