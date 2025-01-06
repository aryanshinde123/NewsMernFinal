import React, { useState } from "react";

const AdminDashboard = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsImage, setNewsImage] = useState(null);
  const [newsDescription, setNewsDescription] = useState("");
  const [newsContext, setNewsContext] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); 
    formData.append("cloud_name", "your_cloud_name"); 

    try {
      setUploading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dzgpts0qi/image/upload`, 
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setNewsImage(data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newsTitle || !newsImage || !newsDescription || !newsContext) {
      alert("All fields are required.");
      return;
    }

    const newsData = {
      title: newsTitle,
      image: newsImage,
      description: newsDescription,
      context: newsContext,
    };

    try {
      const response = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData),
      });
      if (response.ok) {
        alert("News added successfully!");
        setNewsTitle("");
        setNewsImage(null);
        setNewsDescription("");
        setNewsContext("");
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-white">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              News Title
            </label>
            <input
              id="title"
              type="text"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              News Image
            </label>
            <input
              id="image"
              type="file"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-300"
              required
            />
            {uploading && <p className="text-gray-600 text-sm">Uploading image...</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              News Description
            </label>
            <textarea
              id="description"
              value={newsDescription}
              onChange={(e) => setNewsDescription(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="context" className="block text-sm font-medium text-gray-700">
              News Context
            </label>
            <textarea
              id="context"
              value={newsContext}
              onChange={(e) => setNewsContext(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-sky-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-sky-600 rounded-md hover:bg-sky-700"
            disabled={uploading}
          >
            {uploading ? "Adding News..." : "Add News"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
