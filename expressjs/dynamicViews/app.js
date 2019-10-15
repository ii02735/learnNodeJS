const express = require("express");
const app = express();
const rootDir = require("./util/rootDir");
const path = require("path");
const routes = require("./routes/routes");

//before using a template engine, we must add one to express (much simplier) and not to NODE
//set() : modifying configuration of expressJS
app.set("view engine","pug"); //enabling pug as view engine
app.set("views","views"); //telling where expressJS needs to find templates to compile
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);
app.listen(8010);
