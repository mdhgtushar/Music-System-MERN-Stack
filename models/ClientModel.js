const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  client_auth: {
    client_name: {
      type: String,
    },
    client_password: {
      type: String,
    },
  },
  client_details: {
    full_name: {
      type: String,
    },
  },
  client_navigation: {
    favorite_songs: {
      type: String,
    },
    favorite_albums: {
      type: String,
    },
    favorite_artist: {
      type: String,
    },
  },
});

const ClientModel = mongoose.model("client", ClientSchema);

module.exports = ClientModel;
