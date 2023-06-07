const express = require("express");
const userApp = express.Router();
const {
  saveUserProfilePicture,
  fetchUserProfilePicture,
} = require("../services/UserService.js");

userApp.put("/:userId/profile-picture", (req, res) => {
  const userId = req.params.userId;
  //   console.log(req.body);
  const base64profilePicture = req.body.profilePicture;
  const type = req.body.type;
  //   console.log("--->", base64profilePicture);
  saveUserProfilePicture(base64profilePicture, type, userId);
  res.status(200).send();
});

userApp.get("/:userId/profile-picture", (req, res) => {
  const userId = req.params.userId;
  const profilePicture = fetchUserProfilePicture(userId);
  // console.log("hello");
  res.status(200).json(JSON.stringify({ profilePicture: profilePicture }));
});

exports.User = userApp;
