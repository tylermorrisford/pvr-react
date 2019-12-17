const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku) // ------------------ This will need to be updated before deployment
if (process.env.NODE_ENV === "production") {
  app.use('/static', express.static(path.join(__dirname, "rental/build")));
}
// Add routes, both API and view
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "rental", "build", "index.html"))
});

// Connect to Mlab
// const dbuser = process.env.DBUSER;
// const dbpassword = process.env.DBPASS;
// const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds353378.mlab.com:53378/heroku_96lg69gp`


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peninsulavacationrentals", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('Db Connected'));

// Start the API server
app.listen(PORT, () => {
  console.log(`Server now listening on PORT ${PORT}`);
});