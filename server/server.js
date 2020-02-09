const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const movies = require("./movies.js");
app.use("/api/movies", movies.routes);

app.listen(3001, () => console.log("Server listening on port 3001!"));
