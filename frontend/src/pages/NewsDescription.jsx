import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsDescription = () => {
  const { state } = useLocation(); 
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news/article");

        if (!response.ok) {
          throw new Error("Failed to fetch article.");
        }

        const data = await response.json();
        setNews(data.article); 
      } catch (err) {
        setError(err.message); 
      }
    };

    if (!state?.article) {
      fetchArticle();
    } else {
      setNews(state.article); 
    }
  }, [state]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div className= "min-h-screen bg-gray-100 font-body">
      <Navbar setSearchResults={setSearchResults} />
      <div className="font-body pt-28">
        <div className="px-6 md:px-72 mx-auto shadow-lg rounded-md overflow-hidden">
          <div className="py-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-headline">{news.title}</h1>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium">{news.author}</span> &bull;
              <span>{new Date(news.publishedAt).toDateString()}</span>
            </p>
          </div>
          {news.urlToImage && (
            <div className="mb-6">
              <img
                src={news.urlToImage}
                alt={news.title}
                className="w-full h-[600px] object-cover rounded-md shadow-md"
              />
            </div>
          )}
          <div className="p-6">
            {news.description && (
              <p className="text-gray-700 leading-relaxed mb-6">{news.description}</p>
            )}
            {news.url && (
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 underline font-headline"
              >
                Read the full article
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDescription;