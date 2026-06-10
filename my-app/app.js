const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Akshara.. I'm testing CI/CD live.. Yeah it worked.. Never make changes in EC2. Only on local machine is allowed");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
