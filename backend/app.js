const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const myroute = require("./route/my");

app.use(cors());
app.use(express.json());

app.use(myroute);

mongoose
  .connect("mongodb://localhost:27017/selam", { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("3000 running ");
    });
  });
