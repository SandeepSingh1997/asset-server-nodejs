const express = require("express");
const userApp = express.Router();
const {
  saveUserProfilePicture,
  fetchUserProfilePicture,
} = require("../services/UserService.js");

userApp.put("/:userId/profile-picture", (req, res) => {
  const userId = req.params.userId;
  const base64profilePicture = req.body.profilePicture;
  const type = req.body.type;
  if (!base64profilePicture || !type) {
    return res.status(400).send();
  }
  try {
    saveUserProfilePicture(base64profilePicture, type, userId);
    res.status(200).send("profile picture saved");
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});

userApp.get("/:userId/profile-picture", (req, res) => {
  const userId = req.params.userId;
  try {
    const profilePicture = fetchUserProfilePicture(userId);
    return res
      .status(200)
      .json(JSON.stringify({ profilePicture: profilePicture }));
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});

exports.User = userApp;
