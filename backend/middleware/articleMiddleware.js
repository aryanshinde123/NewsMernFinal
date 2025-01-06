require("dotenv").config(); 
const fetchArticle = async (req, res, next) => {
  try {
    if (!req.body.article) {
      const apiKey = process.env.NEWS_API_KEY;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us&pageSize=1`
      );
      const data = await response.json();

      if (response.ok && data.articles.length > 0) {
        req.article = data.articles[0]; 
      } else {
        throw new Error("No article found.");
      }
    }
    next();
  } catch (err) {
    next(err); 
  }
};

module.exports = fetchArticle;
