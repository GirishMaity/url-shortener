const express = require("express");
const {
  handleGenerateShortUrl,
  handleShortIdRedirect,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateShortUrl);

router.get("/:shortId", handleShortIdRedirect);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
