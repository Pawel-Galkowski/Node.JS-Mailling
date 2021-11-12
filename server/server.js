"use strict";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const forms = require("./routes/forms");
const app = express();
require("./middleware/CustomMailer");
require("./middleware/StandardMailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/forms", forms);

//Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
