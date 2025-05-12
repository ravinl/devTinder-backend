const express = require("express");

const PORT = 4444;
const app = express();

// listen the server
app.listen(4444, () => {
  console.log("Server is listening on port", PORT);
});
