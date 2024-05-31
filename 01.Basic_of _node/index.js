const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>my first app </title> </head>");
      res.write("<body>");
      res.write(
        '<form action="/message" method="POST" ><input type="Text" name="message"><button type="submit">Submit</button></form>'
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    }

    if(url === '/message' && method === 'POST'){
        
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
          body.push(chunk);
        });
       return req.on('end',()=>{
   
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
       fs.writeFile('message.txt',parsedBody.split('=')[1],err=>{


        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
       });

        });
     

    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>");
    res.write("<head><title>my first app </title> </head>");
    res.write("<body>");
    res.write("<h1>Hello World !!! </h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  })
  .listen(8080);
