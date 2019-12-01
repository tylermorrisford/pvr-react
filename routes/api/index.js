const router = require("express").Router();
const cottageRoutes = require("./cottages");

// cottage routes
router.use("/cottages", cottageRoutes);

module.exports = router;
