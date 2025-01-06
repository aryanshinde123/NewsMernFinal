# The Daily News India
The Daily News India is a modern news search application that allows users to browse and search for news articles. It is built using Vite React, styled with Tailwind CSS, and integrates MongoDB for storing user data. Live news articles are fetched directly using the NewsAPI.

# Features
Stylish and responsive design with Tailwind CSS.
Dynamic news search functionality by keywords or predefined categories like India, World, and Business.
Backend powered by Node.js and Express.js for managing API requests and user data.
MongoDB database for user data storage.

# Technologies Used
Frontend: Vite, React, Tailwind CSS.
Backend: Node.js, Express.js.
Database: MongoDB.
API: NewsAPI for fetching live news.

# Getting Started
Follow these steps to run the project locally.

# Prerequisites
Install Node.js and npm.
Set up a MongoDB instance (local or cloud).
Obtain an API key from NewsAPI.
Steps to Run
Clone the Repository


git clone <repository_url>  
cd <repository_directory>  
Install Dependencies
Navigate to the frontend and backend folders and install dependencies:


# Frontend  
cd frontend  
npm install  

# Backend  
cd ../backend  
npm install  
Update Backend API Key
Open the backend code and directly replace the placeholder <your_newsapi_key> with your actual NewsAPI key wherever it is used.

Start the Servers
Open two terminals:

Start the frontend server:


cd frontend  
npm run dev  
Start the backend server:


cd backend  
npm start  
Access the Application
Open your browser and navigate to:


http://localhost:5173  

# Notes
News articles may not load if the daily API request limit for NewsAPI is exceeded. Consider upgrading your API plan if required.
Ensure MongoDB is running and accessible for proper functionality.

# Future Enhancements
Add user profiles and options for saving favorite articles.
Introduce additional filtering and sorting mechanisms for better user experience.
Optimize API requests to reduce dependency on external API limits.
