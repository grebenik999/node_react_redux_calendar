const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .set("useUnifiedTopology", true)
  .set("useCreateIndex", true)
  .set("useFindAndModify", false)
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("connected to Mongo"))
  .catch(error => console.log("error from server.js", error));

//Define routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/dashboard", require("./routes/api/dashboard"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
