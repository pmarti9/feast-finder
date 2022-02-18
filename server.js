const express = require("express");
const path = require("path");
const sequelize = require("sequelize");

const db = require("./models");

const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// authentication
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/*");
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
