const  http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  
  switch(request.url)
  {
      case "/":
        response.write(`
            <html>
            <head>
                <title>Greeting</title>
                <meta charset='utf-8'>
            </head>

            <body>
                <h3>Hello and thanks for the great course !</h3>
            </body>
            </html>
        `);
        break;

        case "/users":
                response.write(`
                <html>
                <head>
                    <title>Users</title>
                    <meta charset='utf-8'>
                </head>
    
                <body>
                    <h3>Users : </h3>
                    <ul>
                        <li>John</hi>
                        <li>Rebecca</li>
                        <li>Frederick</li>
                
            `);
             response.write(`
             
                    <form action='/create-user' method='post'>
                        <label for='username'>New username : </label>
                        <input type='text' name='username'>
                        <input type='submit'>
                    </form>
                    </html>
            `);
        
        break;

        case "/create-user":
            const reqData = [];
            request.on("data",(data)=>{
                reqData.push(data);
            })
            .on("end",()=>{
                const user = Buffer.concat(reqData).toString().split("=")[1];
                console.log(`User created ${user}`);
            })

            response.writeHead(302,{"Location":"/"});
        break;
  }
  response.end();

  response.write("error");
}).listen(3000);
