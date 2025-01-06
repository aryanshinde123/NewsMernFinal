import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileEdit = ({ userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
      })
      .catch(err => console.error("Failed to fetch user data", err));
  }, [userId]);

  const handleSaveProfile = () => {
    axios.put(`/api/user/update/${userId}`, { name, email })
      .then(response => {
        navigate("/my-account");
      })
      .catch(err => console.error("Failed to update user data", err));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSaveProfile}
            className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
