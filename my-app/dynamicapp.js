const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Docker Level Up .. Live Update..Hey.. am adding this line here.. sorry!! .. another small update after adding nodemon to dockerfile.. let's if the website will show this content without restarting docker container");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
