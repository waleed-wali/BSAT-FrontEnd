import React, { useState } from 'react';
import { IMAGES } from '../../../constants/images';

function UserProfile() {
  const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [address, setAddress] = useState("");

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePicDelete = () => {
    setProfilePic(IMAGES.defaultProfilePic);
  };

  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={profilePic} alt="User Profile" className="h-24 w-24 rounded-full" />
        </div>
        <div className="flex items-center">
          <label className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 cursor-pointer mr-2">
            Upload Your Profile
            <input type="file" accept="image/*" onChange={handleProfilePicChange} className="hidden" />
          </label>
          <button onClick={handleProfilePicDelete} className="bg-white text-black py-2 px-4 rounded border border-black hover:bg-gray-200 transition duration-200">
            Delete Profile
          </button>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">About Me</label>
          <input type="text" value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} placeholder="About Me" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">Cancel</button>
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Save Changes</button>
      </div>
    </div>
  );
}

export default UserProfile;
