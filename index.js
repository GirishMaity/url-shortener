const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./config/config");
require("dotenv").config();
const app = express();
// const PORT = 5000;

connectToMongoDB(process.env.MONGO_URI).then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(process.env.PORT || 8000, () =>
  console.log(`SERVER LISTENING AT PORT ${process.env.PORT || 8000}`)
);
