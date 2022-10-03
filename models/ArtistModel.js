const mongoose = require("mongoose");

const ArtistSchema = mongoose.Schema({
  artist_full_name: {
    type: String,
    require: true,
  },
  artist_profile_image: {
    type: String,
  },
  artist_details: {
    bio: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  artist_albums: {
    type: String,
  },
  artist_songs: {
    type: String,
  },
});

const ArtistModel = mongoose.model("artist", ArtistSchema);

module.exports = ArtistModel;
