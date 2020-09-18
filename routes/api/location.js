const router = require("express").Router();
const locationController = require("../../controllers/locationController");


// Matches with "/api/cottages/:id"
router
  .route("/:location")
  .get(locationController.findByLocation)

module.exports = router;
