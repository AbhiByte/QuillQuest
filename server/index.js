const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");
mongoDB();

// Middleware to handle CORS
app.use((req, res, next) => {
  // Allow requests from all origins (in a real application, you'd want to restrict this)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./routes/createuser.js"));
app.use("/api", require("./routes/DisplayData.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
