const express = require("express");
const dbConnect = require("./src/db/connect");
dbConnect();
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

app.use(express.json());

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

const port = 4000;
const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  //step:1 check if user exits
  const userExist = await User.exists({ email: req.body.email });
  if (userExist) {
    return res.json({ msg: "Email is already registered." });
  } else {
    await User.create(req.body);
    console.log(req.body);
    return res.json({ msg: "user registered" });
  }
});


app.post('/login', async(req, res) =>{
  //step1: check if phone number exist
    //NO: res.json({msg: "user not registered"})
    //YES: 
      //check if password matches
        // NO: res.json({msg: "Incorrect password"})
        //YES: token
})




// const port = process.env.PORT;

// app.post("/users", (req, res) => {
//   User.create({ name: "kaylin", addr: "ktm" });
//   res.send("ok");
// });

// app.get("/users", async (req, res) => {
//   const data = await User.find();
//   res.send(data);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
