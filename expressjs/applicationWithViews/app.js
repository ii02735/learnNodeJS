const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const rootDir = require("./util/path");

app.use(bodyparser.urlencoded({ extended: true }));

//see 404.html
//It allows to resolve files in order to be used in resources (like HTML for CSS...)
//Now "public" folder has static visibility : if we try to access to a directory that it is in "public", NodeJS will resolve it for us
//instead of writing href="public/css/style.css", use href="/css/style.css"
app.use(express.static(path.join(__dirname,"public")));

app.get("/users",(req,res,next)=>{
    //res.sendFile("/views/user.html") -> won't work, refers to OS root directory (views doesn't exist)
    //res.sendFile("./views/user.html") -> won't work, the path must be absolute
    //-->import the core path module (build a correct path )
    //first argument : where do we begin ? At the current path
    //second argument : desired folder
    //third path : file
    // --> arguments are joined together to make a path
    // no slashes = universality for OS (linux, windows...)

    //if we want to go to a root folder, use ".." instead of "/.." to make no OS distinction
    res.sendFile(path.join(__dirname,'views','user.html'));
})

app.get("/add-user",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","add-user.html"));
})

app.post("/add-user",(req,res)=>{
    res.json(req.body);
});

//Usage of util/path.js in order to simplify path writing

app.get("/better-path",(req,res)=>{
    //Not really needed to use rootDir here, because we are in the main application location
    //So we just replaced __dirname by rootDir (path.join(__dirname,"views,"user.html"))
    res.sendFile(path.join(rootDir,"views","user.html"));
    
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})

app.listen(8002);