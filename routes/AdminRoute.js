const express = require("express");
const AdminController = require("../controllers/AdminController");

const AdminRouter = express.Router();

AdminRouter.get("/", AdminController.get_all);

module.exports = AdminRouter;
