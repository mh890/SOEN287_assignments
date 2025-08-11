// building a basic http server using built in http module

// HTTPS comes w a layer of encryption but HTTP doesnt

/*
Create HTTP servers to handle requests and send responses
Make HTTP requests to other servers
Handle different HTTP methods (GET, POST, PUT, DELETE, etc.)
Work with request and response headers
Handle streaming data for large payloads

Common Response Headers
Content-Type: Specifies the media type of the content (e.g., text/html, application/json)
Content-Length: The length of the response body in bytes
Location: Used in redirects (with 3xx status codes)
Set-Cookie: Sets HTTP cookies on the client
Cache-Control: Directives for caching mechanisms
Access-Control-Allow-Origin: For CORS support
*/
//start by importing http server
const http = require('http');

//then create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Here is a response from the server :)'); // write+end in one
});

server.listen((3000),()=>{
    console.log('Server is running at http://localhost:3000');
});


