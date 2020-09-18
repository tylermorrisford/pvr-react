const router = require("express").Router();
const reservationController = require("../../controllers/reservationController");

// Matches with "/api/reservation"
router.route("/")
//   .get(reservationController.findAll)
  .post(reservationController.create);

// Matches with "/api/cottages/:id"
router
  .route("/:cottageId")
  .get(reservationController.findAll);
  

  router
  .route("/:id")
  .delete(reservationController.remove);

module.exports = router;
