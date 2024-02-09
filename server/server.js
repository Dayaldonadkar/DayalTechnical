const express = require("express");
const app = express();
const router = require("./router/auth-router");
const mongodb = require("./utils/db");

app.use(express.json());
app.use("/api/auth", router);

mongodb().then(() =>
  app.listen(8080, () => {
    console.log("Port is running on 8080");
  })
);
