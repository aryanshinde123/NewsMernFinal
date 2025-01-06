import React, { useState, useEffect } from "react";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const [leftArticles, setLeftArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const maxPages = 6;

  useEffect(() => {
    if (searchResults) return; 
  
    const fetchArticles = async () => {
      if (loading) return;
  
      setLoading(true);
  
      try {
        if (page > maxPages) {
          return;
        }
  
        const response = await fetch(
          `http://localhost:5000/api/news/trending?page=${page}`
        );
        const data = await response.json();
  
        if (response.ok) {
          const articles = data.articles;
  
          setPage((prevPage) => prevPage + 1);
  
          setLeftArticles((prevLeftArticles) => {
            const leftCount = prevLeftArticles.length;
            const rightCount = rightArticles.length;
  
            if (leftCount <= rightCount) {
              return [...prevLeftArticles, ...articles];
            }
  
            return prevLeftArticles;
          });
  
          setRightArticles((prevRightArticles) => {
            const leftCount = leftArticles.length;
            const rightCount = prevRightArticles.length;
  
            if (rightCount < leftCount) {
              return [...prevRightArticles, ...articles];
            }
  
            return prevRightArticles;
          });
        } else {
          throw new Error(data.message || 'Failed to fetch articles');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchArticles();
  }, [page, searchResults]);
  

  const fetchData = () => {
    if (!loading && page <= maxPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const distributeSearchResults = (results) => {
    const leftResults = [];
    const rightResults = [];

    results.forEach((article, index) => {
      if (index % 2 === 0) {
        leftResults.push(article);
      } else {
        rightResults.push(article);
      }
    });

    setLeftArticles(leftResults);
    setRightArticles(rightResults);
  };

  useEffect(() => {
    if (searchResults) {
      distributeSearchResults(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="min-h-screen bg-gray-100 font-body">
      <Navbar setSearchResults={setSearchResults} />
      <main className="p-6 pt-28">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : leftArticles.length > 0 ? (
              <LeftColumn articles={leftArticles} />
            ) : (
              <p className="text-gray-500 text-center">Loading articles...</p>
            )}
          </div>

          <div className="space-y-6 border-l border-gray-300 pl-6">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : rightArticles.length > 0 ? (
              <RightColumn articles={rightArticles} />
            ) : (
              <p className="text-gray-500 text-center">Loading articles...</p>
            )}
          </div>
        </div>

        {!searchResults && (
          <InfiniteScroll
            dataLength={leftArticles.length + rightArticles.length}
            next={fetchData}
            hasMore={page <= maxPages}
            loader={<p>Loading...</p>}
            endMessage={<p className="text-center text-gray-500">No more articles to load</p>}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;