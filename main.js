//external imports
const express = require("express");
const AdminRouter = require("./routes/AdminRoute");
const BandRouter = require("./routes/BandRoute");
const ClientRouter = require("./routes/ClientRoute");

//initializition
const app = express();

//client router setup
app.use("/api/client", ClientRouter);
//bands router setup
app.use("/api/bands/", BandRouter);
//admin router setup
app.use("/api/admin", AdminRouter);
app.get("/", (req, res, next) => {
  res.send("data sended");
});
//Run App
app.listen(5000, () => {
  console.log("app lestining on port 5000");
});
