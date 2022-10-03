const express = require("express");
const ArtistController = require("../controllers/ArtistController");

const BandRouter = express.Router();

BandRouter.get("/", ArtistController.get_all);

module.exports = BandRouter;
