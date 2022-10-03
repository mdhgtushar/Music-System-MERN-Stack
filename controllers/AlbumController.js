const AlbumController = {};

AlbumController.get_all = (req, res, next) => {
  res.send("albumcontroller");
};

module.exports = AlbumController;
