const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Akshara.. I'm testing CI/CD live.. Yeah it worked");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
