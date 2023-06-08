const fs = require("fs");

function saveUserProfilePicture(picture, type, userId) {
  const imageBuffer = Buffer.from(picture, "base64");
  try {
    fs.writeFileSync(`./assets/user_pictures/${userId}.${type}`, imageBuffer);
  } catch (error) {
    throw error;
  }
}

function fetchUserProfilePicture(userId) {
  try {
    const pictureString = fs
      .readdirSync(`./assets/user_pictures`)
      .filter((file) => {
        console.log(file, userId);
        return file.match(`${userId}.`) !== null;
      })[0];
    // console.log(pictureString);

    return {
      profilePicture: fs.readFileSync(
        `./assets/user_pictures/${pictureString}`,
        "base64"
      ),
      type: pictureString.split(".")[1],
    };
  } catch (error) {
    throw error;
  }
}

exports.saveUserProfilePicture = saveUserProfilePicture;
exports.fetchUserProfilePicture = fetchUserProfilePicture;
