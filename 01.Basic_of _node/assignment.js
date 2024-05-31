const http = require("http");

http
  .createServer(function (req, res) {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
      res.end("Hello to my world!");
     res.end();
    }
    if (url === "/users") {
      res.write("<html>");
      res.write("<head><title>Users</title></head>");
      res.write(
        "<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>"
      );
      res.write("</html>");
    res.end();
    }
    if(url === '/username'){
        res.write("<html>");
        res.write("<head><title>my first app </title> </head>");
        res.write("<body>");
        res.write(
          '<form action="/create-username" method="POST" ><input type="Text" name="message"><button type="submit">Submit</button></form>'
        );
        res.write("</body>");
        res.write("</html>");
        res.end();
      }

if(url === '/create-username' ){
   
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
  });
  res.statusCode = 302;
  res.setHeader('Location', '/');
  res.end();

}

  })
  .listen(3000);
