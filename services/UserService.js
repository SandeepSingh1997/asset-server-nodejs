const fs = require("fs");

function saveUserProfilePicture(picture, type, userId) {
  const imageBuffer = Buffer.from(picture, "base64");
  fs.writeFileSync(`./assets/user_pictures/${userId}.${type}`, imageBuffer);
}

function fetchUserProfilePicture(userId) {
  const pictureString = fs
    .readdirSync(`./assets/user_pictures`)
    .filter((file) => {
      return file.match(`${userId}.`) !== null;
    })[0];

  return fs.readFileSync(`./assets/user_pictures/${pictureString}`, "base64");
}

exports.saveUserProfilePicture = saveUserProfilePicture;
exports.fetchUserProfilePicture = fetchUserProfilePicture;
