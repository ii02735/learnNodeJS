const express = require("express");
const app = express();
const rootDir = require("./util/rootDir");
const path = require("path");
const routes = require("./routes/routes");

const expressHbs = require("express-handlebars");
                                    //instead of pug, we define layouts to be inherited in variables
app.engine("handlebars",expressHbs({defaultLayout: "", layoutsDir: ""})); //to include handlebars template engine, (instead of use set() first)
//before using a template engine, we must add one to express (much simplier) and not to NODE
//set() : modifying configuration of expressJS
//app.set("view engine","pug"); //enabling pug as view engine
app.set("view engine", "handlebars"); //enabling handlebars as view engine

app.set("view engine", "ejs"); //enabling ejs as view engine

app.set("views","views"); //telling where expressJS needs to find templates to compile
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);
app.listen(8010);
