const router = require("express").Router();
const cottageController = require("../../controllers/cottageController");

// Matches with "/api/cottages"
router.route("/")
  .get(cottageController.findAll)
  .post(cottageController.create);

// Matches with "/api/cottages/:id"
router
  .route("/:id")
  .get(cottageController.findById)
  .put(cottageController.update)
  .delete(cottageController.remove);

module.exports = router;
