const express = require("express");

const BandRouter = express.Router();

BandRouter.get("/", (req, res, body) => {
  res.send("bnad router");
});

module.exports = BandRouter;
