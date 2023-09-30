const express = require("express");
const router = express.Router();
const User = require("../models.User");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      name: "John Doe",
      password: "123456",
      email: "johndoe@gmail.com",
      location: "Qwerty sjfhdsklf",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
