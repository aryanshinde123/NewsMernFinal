import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Populate user from localStorage if available
    }
  }, []);

  const login = (token, username, role, isSubscribed) => {
    const userDetails = { token, username, role, isSubscribed };
    setUser(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails)); // Store full user object in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user data from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
