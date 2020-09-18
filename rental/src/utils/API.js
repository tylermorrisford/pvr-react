import axios from "axios";

export default {
  // Gets all cottages
  getCottages: function() {
    return axios.get("/api/cottages");
  },
  // Gets all Leland cottages
  getCottagesLocation: function(location) {
    return axios.get("/api/location/" + location);
  },
  // Gets the cottage with the given id
  getCottage: function(id) {
    return axios.get("/api/cottages/" + id);
  },
  // Delete the cottage with the given id
  deleteCottage: function(id) {
    return axios.delete("/api/cottages/" + id);
  },
  // Saves a cottage to the database
  saveCottage: function(cottageData) {
    return axios.post("/api/cottages", cottageData);
  },
  // Saves a cottage to the database
  saveReservation: function(reservation) {
    console.log('json reservation', JSON.stringify(reservation));
    return axios.post("/api/reservation/", reservation);
  },
  // Saves a cottage to the database
  getReservations: function(id) {
    return axios.get("/api/reservation/" + id);
  }
}; // add delete reservation