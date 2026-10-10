const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// Handle Auth Middleware for all GET, POST, ... requests
app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.use("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.delete("/admin/deleteUser", (req, res) => {
  res("Delete a user");
});

// app.use("/test", (req, res) => {
//   res.send("testing purpose");
// });

// app.use("/", (req, res) => {
//   res.send("Hello from the server");
// });

// app.use(
//   "/user",
//   (req, res, next) => {
//     // route handler
//     console.log("handler 1");
//     next();
//     // res.send("route handler 1");
//   },
//   (req, res) => {
//     // route handler 2
//     console.log("handler 2");
//     res.send("route handler 2");
//   },
// );

// app.use("/user", (req, res, next) => {
//   next();
// });

// app.use("/user", (req, res) => {
//   res.send("handler 2");
// });

app.listen(3000, () => {
  console.log("sever is running successfully on port 3000");
});
