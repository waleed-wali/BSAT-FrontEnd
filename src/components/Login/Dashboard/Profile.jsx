import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { changeUserPassword, getProfile, saveUserData } from "../../../API/auth";
import { IMAGES } from "../../../constants/images";
import { toast } from "react-toastify";

const Profile = ({
  profilePic,
  handleProfilePicChange,
  handleProfilePicDelete,
  // firstName,
  // setFirstName,
  // lastName,
  // setLastName,
  // email,
  // setEmail,
  // phone,
  // setPhone,
  // currentPassword,
  // setCurrentPassword,
  // newPassword,
  // setNewPassword,
  // confirmPassword,
  // setConfirmPassword,
}) => {
  const [profile, setProfile] = useState({});

  // const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const userprofile = await getProfile(); // Wait for profile data
      if (userprofile) {
        setEmail(userprofile.email);
        setProfile(userprofile);
        setFirstName(userprofile.name.split(" ")[0]);
        setLastName(userprofile.name.split(" ")[1]);
        setPhone(userprofile.phoneNumber);
      }
    };

    fetchProfile();
  }, []);
  const saveProfile = async () => {
    console.log("profile", profile);
    const userData = {
      id: profile._id,
      // profile:profilePic,
      name: `${firstName} ${lastName}`,
      email,
      phoneNumber: phone,
  };
    const res = await saveUserData(userData);
    if(res.success){
      toast.success("Profile updated Successfully!");
  }
    console.log(res);
  };

  
  const handleCancelChange = () =>{
    setEmail(profile.email);
    setProfile(profile);
    setFirstName(profile.name.split(" ")[0]);
    setLastName(profile.name.split(" ")[1]);
    setPhone(profile.phoneNumber);
}



  const changePassword = async () => {
    const userData = {
      password: newPassword,
      oldPassword: currentPassword
    };
    const res = await changeUserPassword(userData);
    if (res.success) {
      toast.success("Password changed successfully!");
    } else {
      toast.error(res.message);
    }

    setNewPassword("");
    setCurrentPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {/* <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={profilePic}
            alt="User Profile"
            className="h-24 w-24 rounded-full"
          />
        </div>
        <div className="flex items-center">
          <label className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 cursor-pointer mr-2">
            Upload Your Profile
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </label>
          <button
            onClick={handleProfilePicDelete}
            className="bg-white text-black py-2 px-4 rounded border border-black hover:bg-gray-200 transition duration-200"
          >
            Delete Profile
          </button>
        </div>
      </div> */}
      <hr className="my-6 border-gray-300" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField
          label="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputField label="Last Name" value={lastName} onChange={setLastName} />
        <InputField
          label="Email Address"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <InputField label="Phone Number" value={phone} onChange={setPhone} />
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={handleCancelChange} className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">
          Cancel
        </button>
        <button
          onClick={saveProfile}
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
        >
          Save Changes
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputField
            label="Current Password"
            value={currentPassword}
            onChange={setCurrentPassword}
            type="password"
          />
          <InputField
            label="New Password"
            value={newPassword}
            onChange={setNewPassword}
            type="password"
          />
          <InputField
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
          />
        </div>
        <div>
          <div className="flex justify-end mt-4">
            {/* <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">
              Cancel
            </button> */}
            <button
              onClick={changePassword}
              className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
