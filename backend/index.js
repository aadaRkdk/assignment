// Import Express.js framework for building web applications
const express = require("express");
const app = express(); // Create an Express application instance
app.use(express.json()); // Parse incoming JSON data in request bodies

// Database Connection: from /src/db/connect.js file
const dbConnect = require("./src/db/connect");
dbConnect(); // Connect to the database (implementation details in /db/connect.js)

// Import bcrypt for password hashing
const bcrypt = require("bcrypt");
const saltRounds = 10; // Set the number of rounds for password hashing (security factor)

// // Load environment variables from .env file(PORT)
const port = 4000; // Set the server port (can be overridden by a PORT from .env)

// require("dotenv").config();

// Import Mongoose for MongoDB interaction
const mongoose = require("mongoose");
const { Schema } = mongoose; // Destructure Schema from Mongoose
// User Schema Definition
const userSchema = new Schema({
  fullName: String, // String is shorthand for {type: String}
  phoneNumber: String,
  email: String,
  password: String,
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    default: "female",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

// User Model (represents a collection of users in the database)
const User = mongoose.model("User", userSchema);

// User Registration Route (POST /register)
app.post("/register", async (req, res) => {
  // Hash the password securely using bcrypt
  const hashPasswd = await bcrypt.hash(req.body.password, saltRounds);

  // Check if a user with the same email already exists
  const userExist = await User.exists({ email: req.body.email });
  if (userExist) {
    return res.json({ msg: "Email is already registered." });
  } else {
    // If email is unique, create a new user with the hashed password
    req.body.password = hashPasswd; // Replace plain text password with hashed version
    await User.create(req.body); // Asynchronously create a new user document in the database using the data from the request body
    console.log(req.body); // Log registration details
    return res.json({ msg: "user registered" }); // send success message
  }
});

// User Login Route (POST /login)
app.post("/login", async (req, res) => {
  console.log(req.body); // Show login attempt details
  const user = await User.findOne({ email: req.body.email }); // find the user by email
  if (user) {
    console.log(user); // // Log found user details (for debugging)
  } else {
    res.json({ msg: "User not registered." }); // User not found
  }
});

// Start the Express server and listen for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
