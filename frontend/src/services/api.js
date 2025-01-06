import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  try {
    const response = await api.get('/top-headlines', {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,  
        country: 'us',                         
        pageSize: 5,                           
      },
    });
    if (response.status === 200) {
      return response.data.articles;  
    } else {
      throw new Error('Failed to fetch articles');
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
