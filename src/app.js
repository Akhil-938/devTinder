const express = require("express");

const app = express();

// app.use("/test", (req, res) => {
//   res.send("testing purpose");
// });

// app.use("/", (req, res) => {
//   res.send("Hello from the server");
// });

app.use(
  "/user",
  (req, res, next) => {
    // route handler
    console.log("handler 1");
    next();
    // res.send("route handler 1");
  },
  (req, res) => {
    // route handler 2
    console.log("handler 2");
    res.send("route handler 2");
  },
);

app.listen(3000, () => {
  console.log("sever is running successfully on port 3000");
});
