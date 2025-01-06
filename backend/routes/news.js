const express = require("express");
const router = express.Router();
const fetchNewsMiddleware = require("../middleware/fetchNewsMiddleware");
const { getTrendingNews } = require("../controllers/newsController");

router.get("/search", fetchNewsMiddleware, (req, res) => {
  res.status(200).json(req.newsData);
});

router.get("/trending", getTrendingNews);

module.exports = router;
