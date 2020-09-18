const db = require("../models");

// Methods for the cottageController
module.exports = {
  findByLocation: function(req, res) {
    db.Cottage
      .find({cottageLocation: req.params.location})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
