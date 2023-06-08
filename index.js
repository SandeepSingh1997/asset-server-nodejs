const express = require("express");

const cors = require("cors");

const { User } = require("./routes/User.js");

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/user", User);

app.listen(8082, () => {
  console.log("app running...");
});
