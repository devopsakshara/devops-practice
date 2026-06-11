const crypto = require("crypto");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect("mongodb://mongo-db:27017/test")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// create schema (structure)
const User = mongoose.model("User", {
  name: String
});

// route to save data
app.get("/add", async (req, res) => {
  await User.create({ name: "Akshara" });
  res.send("User added ✅");
});

// route to get data
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// home route
app.get("/", (req, res) => {
  res.send("App + DB running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
