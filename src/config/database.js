const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://raviraushannl:Ru56KQOTGqQ9kbZe@namastenode.xjqdr.mongodb.net/"
  );
};

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });

module.exports = { connectDB };
