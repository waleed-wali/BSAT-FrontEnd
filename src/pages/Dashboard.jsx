// import React, { useState } from 'react';
// import Sidebar from '../components/Login/Dashboard/Sidebar';
// import Profile from '../components/Login/Dashboard/Profile';
// import KeywordResearch from '../components/Login/Dashboard/KeywordResearch';
// import DashboardContent from '../components/Login/Dashboard/DashboardContent';
// import ContentIdeas from '../components/Login/Dashboard/ContentIdeas';
// import AdsGeneration from '../components/Login/Dashboard/AdsGeneration';
// //import KeywordAnalytics from '../components/Login/Dashboard/KeywordAnalytics';
// import ChatBot from '../components/Login/Dashboard/ChatBot.jsx';
// import CompetitorAnalysis from '../components/Login/Dashboard/CompetitorAnalysis';

// import { IMAGES } from '../constants/images.js';

// function Dashboard() {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [keyword, setKeyword] = useState('');

//   const handleProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => setProfilePic(reader.result);
//     if (file) reader.readAsDataURL(file);
//   };

//   const handleProfilePicDelete = () => setProfilePic(IMAGES.profilePic);

//   const handleAnalyze = () => {
//     // Implement your keyword analyze logic here
//   };

//   const getContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <Profile
//             profilePic={profilePic}
//             handleProfilePicChange={handleProfilePicChange}
//             handleProfilePicDelete={handleProfilePicDelete}
//             firstName={firstName}
//             setFirstName={setFirstName}
//             lastName={lastName}
//             setLastName={setLastName}
//             email={email}
//             setEmail={setEmail}
//             phone={phone}
//             setPhone={setPhone}
//             currentPassword={currentPassword}
//             setCurrentPassword={setCurrentPassword}
//             newPassword={newPassword}
//             setNewPassword={setNewPassword}
//             confirmPassword={confirmPassword}
//             setConfirmPassword={setConfirmPassword}
//           />
//         );
//       case 'keywordresearch':
//         return <KeywordResearch keyword={keyword} setKeyword={setKeyword} handleAnalyze={handleAnalyze} />;
//       case 'contentideas':
//         return <ContentIdeas />;
//       case 'keywordanalytics':
//         return <KeywordAnalytics />;
//       case 'chatbot':
//         return <ChatBot/>;
//       case 'competitoranalysis':
//         return <CompetitorAnalysis />;
//       case 'AdsGeneration':
//         return <AdsGeneration />;
//       default:
//         return <DashboardContent />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="flex-grow overflow-auto p-6">
//         {getContent()}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('dashboard');
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
      // Update the messages state with a new message from the user
      setMessages([...messages, { from: 'user', text: input }]);
      setInput(''); // Clear the input after sending the message
      // Simulate a bot response (replace this logic with actual bot interaction if needed)
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { from: 'bot', text: 'This is a bot response.' }]);
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

  const getContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <Profile
            profilePic={profilePic}
            handleProfilePicChange={handleProfilePicChange}
            handleProfilePicDelete={handleProfilePicDelete}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        );
      case 'keywordresearch':
        return <KeywordResearch keyword={keyword} setKeyword={setKeyword} handleAnalyze={handleAnalyze} />;
      case 'contentideas':
        return <ContentIdeas />;
      case 'keywordanalytics':
        return <KeywordAnalytics />;
      case 'chatbot':
        return <ChatBot
          messages={messages}
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
        />;
      case 'competitoranalysis':
        return <CompetitorAnalysis />;
      case 'AdsGeneration':
        return <AdsGeneration />;
        case "keywordanalytics":
          return <KeywordAnalytics/>
          case "adsgeneration":
            return <AdsGeneration/>
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow overflow-auto p-6">
        {getContent()}
      </div>
    </div>
  );
}

export default Dashboard;
