require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const mongodb = require("./utils/db");
const errorMiddleWare = require("./middleware/error-middleware");

app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleWare);

mongodb().then(() =>
  app.listen(8080, () => {
    console.log("Port is running on 8080");
  })
);
