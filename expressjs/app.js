/**
 * Express is a NPM framework that speed up web application conception (routing, middleware, requests, etc.)
 * It is a very used dependency nowdays, but there are still alternatives...
 */
const http = require('http');

//import of express

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const routerUser = require("./routes/user");

//body-parser is in fact a middleware
//we'll apply it in order to parse Request object anytime because we had to in order to get form data for example

//extended must be added in order to avoid deprecated warnings
app.use(bodyParser.urlencoded({extended: true})); //true = use qs library, better than querystring library
app.use(routerUser);



//http.createServer(app).listen(3001); can now be written like :

app.listen(3001);

