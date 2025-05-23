const express = require("express");
const { connectDB } = require("./dataBase/connection");

const server = express();
const PORT = 3000;

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
