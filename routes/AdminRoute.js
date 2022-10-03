const express = require("express");

const AdminRouter = express.Router();

AdminRouter.get("/", (req, res, next) => {
  res.send("admin router");
});

module.exports = AdminRouter;
