import React from 'react';
import InputField from './InputField';

const Profile = ({
  profilePic,
  handleProfilePicChange,
  handleProfilePicDelete,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
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
        <InputField label="First Name" value={firstName} onChange={setFirstName} />
        <InputField label="Last Name" value={lastName} onChange={setLastName} />
        <InputField label="Email Address" value={email} onChange={setEmail} type="email" />
        <InputField label="Phone Number" value={phone} onChange={setPhone} />
        <InputField label="Current Password" value={currentPassword} onChange={setCurrentPassword} type="password" />
        <InputField label="New Password" value={newPassword} onChange={setNewPassword} type="password" />
        <InputField label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} type="password" />
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">Cancel</button>
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
