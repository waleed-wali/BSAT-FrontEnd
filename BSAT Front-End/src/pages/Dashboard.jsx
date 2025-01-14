import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Login/Dashboard/Sidebar';
import Profile from '../components/Login/Dashboard/Profile';
import KeywordResearch from '../components/Login/Dashboard/KeywordResearch';
import DashboardContent from '../components/Login/Dashboard/DashboardContent';
import ContentIdeas from '../components/Login/Dashboard/ContentIdeas';
import AdsGeneration from '../components/Login/Dashboard/AdsGeneration';
import ChatBot from '../components/Login/Dashboard/ChatBot.jsx';
import CompetitorAnalysis from '../components/Login/Dashboard/CompetitorAnalysis';
import { IMAGES } from '../constants/images.js';

function Dashboard() {
  const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [keyword, setKeyword] = useState('');

  // ChatBot state and handlers
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { from: 'bot', text: 'Admin is not available now.' }]);
      }, 1000);
    }
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProfilePic(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleProfilePicDelete = () => setProfilePic(IMAGES.profilePic);

  const handleAnalyze = () => {
    // Implement your keyword analyze logic here
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar /> */}
      
          {/* <Route path="/" element={<DashboardContent />} /> */}
          
    </div>
  );
}

export default Dashboard;
