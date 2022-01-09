const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json());
const db = config.get("mongoURI");

// Connect to MongoDb
mongoose
  .connect(db, {
    useNewUrlParser: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB has connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/quiz", require("./routes/api/quiz"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
