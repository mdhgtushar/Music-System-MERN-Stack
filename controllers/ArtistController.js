const ArtistModel = require("../models/ArtistModel");
const mongoose = require("mongoose");
const ArtistController = {};

ArtistController.get_all = async (req, res, next) => {
  await mongoose.connect("mongodb://localhost:27017");
  const artist = await ArtistModel.create({
    artist_full_namea: "Test Artost",
  });
  res.send(artist);
};

module.exports = ArtistController;
