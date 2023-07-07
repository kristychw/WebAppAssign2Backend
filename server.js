//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Set up the necessary middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// MongoDB connection
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log("Database is NOT connected!! Please check!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "It is working!",
  });
});

require("./routes/user.route")(app);
require("./routes/contact.route")(app);

// Start the server
app.listen(4000, () => {
  console.log("Server is working!!");
});

module.exports = app;

