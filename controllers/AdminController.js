const AdminController = {};

AdminController.get_all = (req, res, next) => {
  res.send("adminController");
};

module.exports = AdminController;
