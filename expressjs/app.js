/**
 * Express is a NPM framework that speed up web application conception (routing, middleware, requests, etc.)
 * It is a very used dependency nowdays, but there are still alternatives...
 */
const http = require('http');

//import of express

const express = require("express");
const app = express();
/**
 * Creation of a middleware (intermediate that will work on incoming request, kind of filter)
 * @param req : Request
 * @param res : Response
 * @param next : Function (chaining pattern, allow to go to the next middleware)
 */
app.use((req,res,next)=>{
    console.log("In middleware");
    next(); //Allow to go to next middleware
})
.use((req,res,next) => {
    console.log("Next middleware")
    res.send("<h3>Hello ExpressJS</h3>"); //send is like write, but it sets to text/html automatically
});


//http.createServer(app).listen(3001); can now be written like :

app.listen(3001);

