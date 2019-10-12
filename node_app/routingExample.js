const http = require('http');
const fs = require("fs");
http.createServer((req, res) => {
    
    res.setHeader("Content-Type",'text/html');
    //Prototype of routing
    const url = req.url;
    switch(url)
    {
        case "/":
            res.write(`
            <html>
            <head>
                <title>Root</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h3>Hey ! You are in root !</h3>
            </body>
            </html>
            `)
        break;

        case "/form":
            res.write(`
            <html>
            <head>
                <title>Form</title>
                <meta charset="utf-8">
            </head>
            <body>
                <form action="/message" method="post">
                    <input type="text" name="message">
                    <input type="submit" value="send response to node !"</input>
                </form>
            </body>
            </html>
            `);
        break;

        case "/message":
            if(req.method === "POST") {//check if method is post
                //in order to get the data sent to the request
                //we must use an event listener
                const data = [];
                req.on("data",(event)=>data.push(event) );
                req.on("end",()=>{ //data can be read at the end of the data event (and not outside) 
                    //so we call the end listener and read it inside its register
                    const parsedData = Buffer.concat(data).toString();
                    fs.writeFileSync("data.txt",parsedData.split("=")[1]); //this line is executed synchronously (remember)
                    /**
                     * It is not very important to use Sync if we write a small file like that
                     * But with huge files, it can block the server.
                     * So writeFileSync is not really recommended
                     * Instead we should use that :
                     */

                     fs.writeFile("data.txt", data, (err)=>{
                         //the callback to write is about all catching some errors, if the file cannot be written
                         //Sync does that immediately, but when it is async, the thread of execution is different
                         //and NodeJS doesn't know what happened there because the thread has already passed the writeFile instruction
                         //that's why we need to manage errors
                         //In fact, that callback is still executed at THE END of writing the file
                         
                         //You can put the code that should be executed after the end of that action 
                         console.log("fire !");
                     }) 

                     //In fact, heavy operations are not handled by the event loop of the server
                     //which is responsible of the server execution
                     //These are sent to a worker pool, which is managed by nodejs, and executed by ANOTHER THREAD !
                     //Indeed, it is seperated of the event loop which is executed by a thread

                     //The writeFile's callback is executed by the worker pool
                     
                });

                //EVENTS HANDLERS are of course executed asynchronously (because events are not triggered immediately, but later in the time
                // exemple : we send the data much later after the event listener creation in the server).
                //So the writing file happens AFTER the res.end()
                //if we had to change the response, he should put res.end() inside the HANDLER
            }
            res.writeHead(302, {"Location":"/"}); //Redirection to root (/)
        break;

        default:
            res.write(`
            <html>
            <head>
                <title>Unknown</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h3>Unknown page</h3>
            </body>
            </html>
            `);
    }
    res.end();
    


}).listen(8081); //we can write listen directly after, because remember that createServer() returns a Server.

console.log('Server running at http://127.0.0.1:8081/');