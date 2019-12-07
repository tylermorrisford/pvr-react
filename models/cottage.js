const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cottageSchema = new Schema({ // update scheme with cottage details
  cottageId: { type: Number, required: false },
  cottageName: { type: String, required: true },
  cottageLocation: { type: String, required: true },
  cottageImage: { type: String, required: true },
  cottagePerNight: { type: Number, required: true },
  cottagePerWeek: { type: Number, required: true },
  cottageSleeps: { type: Number, required: true },
  cottageSlug: { type: String, required: true },
  cottageDescription: String,
  cottageBedrooms: { type: Number, required: true },
  cottageBathrooms: { type: Number, required: true },
  cottageAmenities: Array,
  cottagePets: { type: Boolean, default: false },
  cottageBooked: Array,
  date: { type: Date, default: Date.now }
});

// add array of cottagePhotos, 

const Cottage = mongoose.model("Cottage", cottageSchema);

module.exports = Cottage;
