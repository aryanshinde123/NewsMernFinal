const getArticle = (req, res) => {
    if (req.article) {
      res.json({ article: req.article }); 
    } else {
      res.status(404).json({ message: "Article not found." });
    }
  };
  
  module.exports = getArticle;
  