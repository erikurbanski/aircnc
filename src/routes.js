const express = require("express");
const multer = require("multer");
const upConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(upConfig);

const BookingController = require("./controllers/BookingController");
const DashboardController = require("./controllers/DashboardController");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");

routes.get("/dashboard", DashboardController.show);

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/spots", SpotController.index);

routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
