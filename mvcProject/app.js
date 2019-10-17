const express = require("express");
const app = express();
const parser = require("body-parser");
const routes = require("./routes/routes");
const path = require("path");

//setting pug
app.set("view engine", "pug");
app.set("views","views");
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);

app.use((req,res,next)=>{
    res.status(404).render("404.pug");
})

app.listen(8010);