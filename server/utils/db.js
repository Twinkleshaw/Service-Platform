const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    console.log("database connected");
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error.message);
    console.log("database connection failed");
  }
};
module.exports = connectDb;
