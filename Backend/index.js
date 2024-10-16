const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("server running port 3000");
});
