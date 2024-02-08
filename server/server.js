const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api", router);

app.listen(8080, () => {
  console.log("Port is running on 8080");
});
