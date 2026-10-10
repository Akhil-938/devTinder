const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("testing purpose");
});

app.use("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("sever is running successfully on port 3000");
});
