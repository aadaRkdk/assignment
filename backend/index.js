// Load environment variables from .env file as early as possible
require("dotenv").config();

// Import required modules
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

// Connect to the database
const dbConnect = require("./db/connect");
dbConnect(); // Database connection logic is in ./server/db/connect

// Initialize Express application
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON data in request bodies

// Set the server port
const port = process.env.PORT || 8000; // Use port from .env file or default to 8000

// Define User schema and model using Mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true, // Full name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"], // Only allow these values for gender
    default: "female", // Default gender is female
  },
  role: {
    type: String,
    enum: ["admin", "user"], // Only allow these roles
    default: "user", // Default role is user
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// User Registration Route (POST /register)
app.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, gender, role } = req.body;

    // Check if email is already registered
    const emailExist = await User.exists({ email });

    if (emailExist) {
      return res.status(400).json({ msg: "Email is taken!" });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
      gender,
      role,
    });

    await newUser.save(); // Save the new user to the database
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

// User Login Route (POST /login)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Email not registered" });
    }

    // Compare passwords
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).json({ msg: "Invalid Password" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
    res.status(200).json({ msg: "Authorized", token });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

// Get all users (GET /users)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
});

// Start the Express server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Note:
//secret key is generated using the code:-------> require('crypto').randomBytes(64).toString('hex')

// // Load environment variables from .env file as early as possible
// require("dotenv").config();

// // Import required modules
// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const cors = require("cors");

// // Connect to the database
// const dbConnect = require("./src/db/connect");
// dbConnect(); // Database connection logic is in ./src/db/connect

// // Initialize Express application
// const app = express();
// app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
// app.use(express.json()); // Parse incoming JSON data in request bodies

// // Set the server port
// const port = process.env.PORT || 8000; // Use port from .env file or default to 8000

// // Define User schema and model using Mongoose
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   fullName: {
//     type: String,
//     required: true, // Full name is required
//   },
//   phoneNumber: {
//     type: String,
//     required: true, // Phone number is required
//     unique: true, // Ensure phone number is unique
//   },
//   email: {
//     type: String,
//     required: true, // Email is required
//     unique: true, // Ensure email is unique
//   },
//   password: {
//     type: String,
//     required: true, // Password is required
//   },
//   gender: {
//     type: String,
//     enum: ["male", "female", "others"], // Only allow these values for gender
//     default: "female", // Default gender is female
//   },
//   role: {
//     type: String,
//     enum: ["admin", "user"], // Only allow these roles
//     default: "user", // Default role is user
//   },
// });

// // Create the User model
// const User = mongoose.model("User", userSchema);

// // User Registration Route (POST /register)
// app.post("/register", async (req, res) => {
//   try {
//     const { fullName, phoneNumber, email, password, gender, role } = req.body;

//     // Check if phone number or email is already registered
//     const phoneExist = await User.exists({ phoneNumber });
//     const emailExist = await User.exists({ email });

//     if (phoneExist) {
//       return res.status(400).json({ msg: "Phone Number is taken!" });
//     } else if (emailExist) {
//       return res.status(400).json({ msg: "Email is taken!" });
//     }

//     // Hash the password
//     const hashPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       fullName,
//       phoneNumber,
//       email,
//       password: hashPassword,
//       gender,
//       role,
//     });

//     await newUser.save(); // Save the new user to the database
//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ msg: "Internal server error", error: error.message });
//   }
// });

// // User Login Route (POST /login)
// app.post("/login", async (req, res) => {
//   try {
//     const { phoneNumber, password } = req.body;

//     // Check if phone number exists
//     const user = await User.findOne({ phoneNumber });
//     if (!user) {
//       return res.status(404).json({ msg: "Phone Number not registered" });
//     }

//     // Compare passwords
//     const isMatched = await bcrypt.compare(password, user.password);
//     if (!isMatched) {
//       return res.status(401).json({ msg: "Invalid Password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { phoneNumber: user.phoneNumber },
//       process.env.SECRET_KEY
//     );
//     res.status(200).json({ msg: "Authorized", token });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ msg: "Internal server error", error: error.message });
//   }
// });

// // Get all users (GET /users)
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find(); // Fetch all users from the database
//     res.status(200).json(users);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ msg: "Internal server error", error: error.message });
//   }
// });

// // Start the Express server and listen for incoming requests
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
