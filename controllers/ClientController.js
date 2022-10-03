const ClientController = {};

ClientController.get_all = (res, res, next) => {
  res.send("Hello from cient controller");
};

module.exports = ClientController;
