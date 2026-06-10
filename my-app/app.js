;throw new Error("test failure");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Akshara.. I'm testing CI/CD live.. Yeah it worked.. Never make changes in EC2. Only on local machine is allowed..Now i'm adding production environment and before that a simple test to see if my app runs or not.. now am checking if the content goes live if any error is found in testing stage");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
