const express = require('express')
const routerAdmin = express.Router();

routerAdmin.use("/",(req,res,next)=>{
    if(req.query.connected !== "true")
        res.status(403).send("<h2 style='color:crimson'>Hey ! No trespassing to admin area !</h2>");
    else
        next();//If next function is use(), so a middleware, that next will be applied after that middleware
        //If we don't routerly multiple middlewares together, just don't write next()
})

//In fact, this is not a middleware here, so the next() will just ALLOW to forward this GET (same for POST) request
//It is recommanded to put middlewares at the top
routerAdmin.get("/coor",(req,res,next)=>{
    res.send("<h2>Hey admin ! Here is your coordinates !</h2>");
})

routerAdmin.get("/form",(req,res,next)=>{
    res.send(`
    <form action='/submit' method='POST'>
        <label for='name'>Name :</label>
        <input type='text' name='name'>
        <label for='pwd'>Password :</label>
        <input type='password' name='pwd">
        <label for='phone'>Phone number:</label>
        <input type='text' name='phone'>
        <input type='submit'>
    </form>
`);
});

module.exports = routerAdmin;