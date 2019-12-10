const router = require("express").Router();
const cottageRoutes = require("./cottages");
const locationRoutes = require("./location");

// cottage routes
router.use("/cottages", cottageRoutes);
router.use("/location", locationRoutes);

module.exports = router;
