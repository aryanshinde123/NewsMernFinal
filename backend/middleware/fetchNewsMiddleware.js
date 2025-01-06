const axios = require("axios");

const fetchNewsMiddleware = async (req, res, next) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const apiKey = process.env.NEWS_API_KEY; 
    const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${encodeURIComponent(query)}`;

    const response = await axios.get(url);

    req.newsData = response.data;
    next(); 
  } catch (error) {
    console.error("Error fetching data from News API:", error.message);
    res.status(500).json({ message: "Failed to fetch news data" });
  }
};

module.exports = fetchNewsMiddleware;
