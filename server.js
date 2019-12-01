// require node packages: 
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

// require mongoose models
// const db = require("./models");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.set('views', path.join(__dirname, 'views/'));
 
app.get('/', (req, res) => {
    res.render('index');
});

// THIS IS BOOKS Server.js - as reference
// const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`Server now listening on PORT ${PORT}`);
// });