//warning : middlewares can act as normal routes, their order doesn't import but middlewares'does !
//Indeed : routes = EXACT PATHS, middlewares = PATTERNS (order counts !)
//Higher order for existants routes, lower for exceptionnal cases ("else" at end)

const express = require('express')

const router = express.Router();

/**
 * Creation of a MIDDLEWARE (intermediate that will work on incoming request, kind of filter)
 * @param string : url PATTERN to routerly middleware
 * @param req : Request
 * @param res : Response
 * @param next : Function (chaining pattern, allow to go to the next middleware)
 */
router.use("/users",(req,res,next)=>{
    res.send(`<h3>No user available</h3>`);
})

//Example of redirection
router.use("/in-working",(req,res,next)=>{
    res.redirect(301,"/");
});

router.use("/form",(req,res,next)=>{
    res.send(`
        <form action='/submit' method='POST'>
            <label for='name'>Name :</label>
            <input type='text' name='name'>
            <label for='other'>Other : </label>
            <input type='text' name='other'>
            <input type='submit'>
        </form>
    `);
})

//use will work for GET and POST
//in order to add a middleware only for a specific method, just use get, post, put or patch methods
//Here it is post. So if we access to /submit, we will redirected to another middleware that routerlies the "/submit" pattern after that one
router.post("/submit", (req,res,next)=>{
    //thanks to express we don't have to repeat the same procedure to get the form data with listeners (Buffer.concat in 'data' event and store it in 'end' event)
    //we just have to add a NEW DEPENDENCY : body-parser in order to parse the Request object
    //and read its content with the .body attribute
    fs.writeFile("fileMiddleware.txt",req.body.name + " " + req.body.other,(err)=>{});
    res.redirect(302,"/");
});


//404 error, this is not only for GET, but for ALL requests that ask an unexistant page
//We don't set a route, because we want to CATCH ALL the remaining routes that are not mentionned at top
//(there is a lot of them !)

//If we have written that middleware at the top, ALL THE REQUESTS WOULD GET TO THAT MIDDLEWARE FIRST (imperative programming !)
//that middleware must be the LAST
router.use((req,res,next)=>{
    res.status(404).send(`<h2 style='color:red'>404 : Page not found !</h2>`);
})


module.exports = router;