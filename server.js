const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("rental/build"));
}
// Routes; both API and View
app.use(routes);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, "rental", "build", "index.html"))
// });

mongoose.connect(process.env.DB_URI || "mongodb://localhost/peninsulavacationrentals", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('Db Connected'));

// Start the API server
app.listen(PORT, () => {
  console.log(`Server now listening on PORT ${PORT}`);
});