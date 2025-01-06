import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import SubscribePage from './pages/SubscribePage';
import { UserProvider } from './context/userContext';
import MyAccount from './components/MyAccount';
import NewsDescription from './pages/NewsDescription';
import AdminDashboard from "./pages/AdminDashborad";


function App() {
  return (
    <UserProvider>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/subscribe' element={<SubscribePage/>} />
          <Route path='/myaccount' element={<MyAccount/>} />
          <Route path='/news/:slug' element={<NewsDescription/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;