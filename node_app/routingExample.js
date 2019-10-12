const http = require('http');
const routes = require("./routes");
//we use the function as callback from another file thanks to module.exports
http.createServer(routes).listen(8081); //we can write listen directly after, because remember that createServer() returns a Server.

console.log('Server running at http://127.0.0.1:8081/');

//For the moment, the content of the imported file is hidden, locked by node