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
const adminUser = require("./routes/adminRoutes");
//body-parser is in fact a middleware
//we'll apply it in order to parse Request object anytime because we had to in order to get form data for example

//extended must be added in order to avoid deprecated warnings
app.use(bodyParser.urlencoded({extended: true})); //true = use qs library, better than querystring library
app.use(routerUser);
app.use("/admin",adminUser);//warning : we attributed the "/" as existant in the admin router, but not in the RouterUser
                            //In the upper router, the "/" is not existant, so it will result to a 404
                            //We can either:
                           /*
                            *  1) Put the adminUser router upper --> problem, for / or /admin/ we will have a forbidden message
                            *  => remember that "/" is used for middlewares ! 
                            *  or
                            *  2) Add the "/admin" prefix to the admin router <-- preferred solution (no order changing)
                            */


//http.createServer(app).listen(3001); can now be written like (thanks to express) :

app.listen(3001);

