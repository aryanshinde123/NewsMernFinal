const express = require('express');
const router = express.Router();

const trendingNews = require('./trendingNews.json'); 

router.get('/trending', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const pageSize = 6; 
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedNews = trendingNews.articles.slice(startIndex, endIndex); 

    if (paginatedNews.length === 0) {
      return res.status(404).json({ message: 'No more articles available' });
    }

    res.json({
      page,
      pageSize,
      totalArticles: trendingNews.articles.length,
      articles: paginatedNews,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch trending news', error: error.message });
  }
});

module.exports = router;
