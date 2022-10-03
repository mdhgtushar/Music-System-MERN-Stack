const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
  album_name: {
    type: String,
  },
  album_image: {
    type: String,
  },
  album_description: {
    type: Text,
  },
  album_artist: {
    type: String,
  },
  album_songs: {
    type: String,
  },
});
