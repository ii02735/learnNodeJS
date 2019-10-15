//importation of a package
//require is a method that can import a file, or directly a core module by entering its name, here the core module http
const http = require('http'); //because we don't intend to overwrite the package value, we use a const variable

//syntax to create a server, we pass a callback inside
//this is an example of event writing in node :
// If a HTTP request comes, we handle it by executing the function inside createServer()
const server = http.createServer((req,res)=>{ //req = Request, incoming request; res = Response, content sent to client
    console.log(req.url, req.method); 
    //process.exit(); //by writing that, we unregister a listener (listen()) after handling a request
    //Because this is the UNIQUE listener, unregister this we cause the NODE application to FINISH
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
    <head>
        <title>Hello world</title>
    </head>
    <body>
        <h1>It works</h1>
    </body>
    </html>
    `); //Example of sending a response
    res.end(); //After this line, writing more code will result to an error. That line means that NODEJS must send the response to the client
    
})


//createServer returns a Server object, that's why we stored it inside a const server variable

//and because we need it to listen requests incoming, and execute the anon callback if it catches a HTTP request :
/**
 * 8001 = local port number
 */
server.listen(8001); //listen = wait for requests, => event listener of requests

console.log("Listening to 8001 port..."); //will still display because listen is not a blocking loop, but an EVENT loop
//Because there are event LISTENERS (listen()), the event loop is triggered (functionality of an node application)
//It will trigger the anon callback (the event handler)

/**
 * A server should handle a thousand of requests
 * It would be bad if a server was getting stuck because it pauses each time when it handles a request
 * That's why NODEJS performs a LOOP EVENT in order to handle a maximum of requests
 * and because a NODE server is a SINGLE THREADED one !
 */

//because we haven't written HTML content yet, accessing to server will stuck (proof of event loop), and req object will be displayed to console

