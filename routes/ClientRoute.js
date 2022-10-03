const express = require("express");
const ArtistController = require("../controllers/ArtistController");
const SongController = require("../controllers/SongController");

const ClientRouter = express.Router();

ClientRouter.get("/", ArtistController.get_all);

module.exports = ClientRouter;
