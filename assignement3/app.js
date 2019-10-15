const express = require("express");
const app = express();
const routes = require("./routes/users");
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));

app.use(routes);

app.listen(8010);

module.exports.express = app;