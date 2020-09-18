const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({ // update scheme with cottage details
  cottageId: { type: String, required: true },  
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  createdDate: { type: Date, default: Date.now }
},
{collection: "reservation"});


const Reservation = mongoose.model("reservation", reservationSchema);

module.exports = Reservation;
