const axios = require("axios");

const getTrendingNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 6;
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us&pageSize=${pageSize}&page=${page}`;

    const response = await axios.get(url);

    if (response.data.articles && response.data.articles.length > 0) {
      res.status(200).json({
        page,
        pageSize,
        totalArticles: response.data.totalResults,
        articles: response.data.articles,
      });
    } else {
      res.status(404).json({ message: "No more articles available" });
    }
  } catch (error) {
    console.error("Error fetching trending news:", error.message);
    res.status(500).json({ message: "Failed to fetch trending news/API limit reached" });
  }
};

module.exports = { getTrendingNews };
