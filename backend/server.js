require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios"); 
const cheerio = require("cheerio");
const authRoutes = require("./routes/auth");
const newsRoute = require("./routes/news");
const articleRoutes = require("./routes/articleRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoute);
app.use("/api/news", articleRoutes);

const mongoURI = process.env.MONGO_URI; 
if (!mongoURI) {
  console.error("MongoDB connection URI is missing. Add MONGO_URI in your .env file.");
  process.exit(1); 
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  });


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});