const express = require("express");
const fetchArticle = require("../middleware/articleMiddleware");
const getArticle = require("../controllers/articleController");

const router = express.Router();

router.get("/article", fetchArticle, getArticle); 

module.exports = router;
