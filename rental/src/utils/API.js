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
  // Update the cottage with the given id -- most recently added!
  updateCottage: function(id) {
    return axios.put("/api/cottages/" + id);
  },
  // Saves a cottage to the database
  saveCottage: function(cottageData) {
    return axios.post("/api/cottages", cottageData);
  }
};