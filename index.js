const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./config/config");

const app = express();
const PORT = 5000;

connectToMongoDB(
  "mongodb+srv://girishmaity164:APxoI1nFWuctazca@urlshortener.ssfoivl.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("MongoDB connected"));

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`SERVER LISTENING AT PORT ${PORT}`));
