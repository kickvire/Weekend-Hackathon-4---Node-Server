var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url==='/welcome')
         {
             res.setHeader("Content-type","text/plain");
             res.statusCode=200;
             res.end("Welcome to Dominos!")
         }
     if(req.url==='/contact')
     {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
        }))
     }
  
}
server.listen(3000);

module.exports = httpServer;