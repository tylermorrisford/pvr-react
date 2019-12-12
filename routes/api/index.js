const router = require("express").Router();
const cottageRoutes = require("./cottages");
const locationRoutes = require("./location");
const reservationRoutes = require("./reservation");

// cottage routes
router.use("/cottages", cottageRoutes);
router.use("/location", locationRoutes);
router.use("/reservation", reservationRoutes);

module.exports = router;
