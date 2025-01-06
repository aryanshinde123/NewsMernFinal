import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const MyAccount = () => {
  const { user, logout } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
    } else {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            setUserData(data);
          } else {
            setError("Failed to fetch user data");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to fetch user data");
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading)
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center text-lg text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 py-10 font-body">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center mb-8">
          <FaUser className="text-6xl text-gray-700 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 font-headline">My Account</h1>
        </div>

        {/* User Info Section */}
        <div className="divide-y divide-gray-200">
          <div className="flex justify-between items-center py-4">
            <span className="text-lg font-semibold text-text font-headline">Name</span>
            <span className="text-gray-500">
              {userData?.name || "No name added"}
            </span>
            <button className="text-blue-500 text-sm hover:underline">
              Update
            </button>
          </div>

          <div className="flex justify-between items-center py-4">
            <span className="text-lg font-semibold text-text font-headline">Email</span>
            <span className="text-gray-500">
              {userData?.email || "No email added"}
            </span>
            <button className="text-blue-500 text-sm hover:underline">
              Update
            </button>
          </div>
        </div>

        {/* Become a Subscriber */}
        <div className="mt-8 border-t pt-6 flex items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 font-headline">
              Become a Subscriber
            </h2>
            <p className="text-sm text-gray-600">
              Gain full access to news, recipes, puzzles, and more. Enjoy
              everything the site offers, in one subscription.
            </p>
          </div>

          {/* Button */}
          <button
            className="py-2 px-4 bg-gray-800 font-headline text-white rounded-lg hover:bg-gray-700"
            onClick={() => navigate("/subscribe")}
          >
            Learn More
          </button>
        </div>

        {/* Share The Platform */}
        <div className="mt-8 border-t pt-6 flex items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 font-headline">
              Share The Platform
            </h2>
            <p className="text-sm text-gray-600">
              Celebrate what connects you. Give the gift of access to premium
              content.
            </p>
          </div>

          {/* Button */}
          <div className="ml-6">
            <button className="py-2 px-4 font-headline bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              See Options
            </button>
          </div>
        </div>

        {/* Your Content */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-800 font-headline">Your Content</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 ">Newsletters</span>
              <button
                className="text-blue-500 text-sm hover:underline"
                onClick={() => navigate("/")}
              >
                View All
              </button>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 ">Saved Articles</span>
              <button className="text-blue-500 text-sm hover:underline">
                View All
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-800 font-headline">Privacy</h2>
          <p className="text-sm text-gray-600">
            We take your privacy seriously. For more information, visit our{" "}
            <a href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex justify-between items-center py-2 pt-4">
            <span className="text-black font-headline text-lg font-semibold">Delete Your Account</span>
            <button className="text-red-500 text-sm hover:underline ">
              Delete
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full py-3 bg-gray-800 font-headline text-white rounded-lg hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
