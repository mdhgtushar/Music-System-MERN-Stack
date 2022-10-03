const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  song_title: {
    type: String,
    require: true,
  },
  song_image: {
    type: String,
  },
  song_url: {
    type: String,
    require: true,
  },
  song_lyric: {
    type: Text,
  },
  song_artist: {
    type: String,
  },
  song_album: {
    type: String,
  },
});

const SongModel = mongoose.model("song", SongSchema);

module.exports = SongModel;
