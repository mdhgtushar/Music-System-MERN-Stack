const SongController = {};

SongController.get_all = (req, res, next) => {
  res.send("from songscontroller");
};

module.exports = SongController;
