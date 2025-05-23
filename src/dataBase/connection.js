const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raviraushannl:StCK3HTFkvPTAHDO@namastenode.xjqdr.mongodb.net/devTinder"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectDB };
