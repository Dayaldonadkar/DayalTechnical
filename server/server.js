require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const mongodb = require("./utils/db");
const errorMiddleWare = require("./middleware/error-middleware");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:5174",
  methods: "GET,POST",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleWare);

mongodb().then(() =>
  app.listen(8080, () => {
    console.log("Port is running on 8080");
  })
);
