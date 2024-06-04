const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
      const connect = await mongoose.connect(
        "mongodb://127.0.0.1:27017/assignment"
      );
  
      if (connect) {
        console.log("Successfully connected!");
      }
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  };
  
module.exports = dbconnect;
