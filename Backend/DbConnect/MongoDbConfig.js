const dbusername = mahmudulislammern;
const dbpassword = v1I2nJkAPSTcEsTN;
const ConnecttionUrl =
  "mongodb+srv://mahmudulislammern:v1I2nJkAPSTcEsTN@food.vuhn2.mongodb.net";

const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    const MongodbInstence = mongoose.connect(ConnecttionUrl);
  } catch (error) {
    console.log("error from mongodb connection", error);
  }
};

module.exports = { ConnectDb };
