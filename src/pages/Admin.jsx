import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants/images';
import { activateUser, changeUserPassword, deactivateUser, getAllUsers, getProfile, saveUserData } from '../API/auth';
import { toast } from 'react-toastify';

function Admin() {
    const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [allUsers, setAllUsers] = useState([]);

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
        setProfilePic(IMAGES.defaultProfilePic); // Assuming you have a default profile picture
    };

    const handleActivateUser = async (userId) => {
        const resp = await activateUser(userId);
        toast.success("User Activated Successfully!");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const handleDeactivateUser = async (userId) => {
        const resp = await deactivateUser(userId);
        toast.success("User De-Activated Successfully!");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
         console.log("resp is : ", resp);
    };


    const handleGetAllUsers = async () => {
        const data = await getAllUsers();
        if (data.success) {
            setAllUsers(data.users);
        }
    }

    const handleCancelChange = () =>{
        setEmail(profile.email);
        setProfile(profile);
        setFirstName(profile.name.split(" ")[0]);
        setLastName(profile.name.split(" ")[1]);
        setPhone(profile.phoneNumber);
    }

    const [profile, setProfile] = useState({});
    useEffect(() => {
        const fetchProfile = async () => {
            const userprofile = await getProfile(); // Wait for profile data
            if (userprofile) {
                setEmail(userprofile.email);
                setProfile(userprofile);
                setFirstName(userprofile.name.split(" ")[0]);
                setLastName(userprofile.name.split(" ")[1]);
                setPhone(userprofile.phoneNumber);
                setProfile(userprofile)
            }
        };

        fetchProfile();
        handleGetAllUsers();
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

    const changePassword = async () => {
        const userData = {
            password: newPassword,
            oldPassword: currentPassword
        };
        const res = await changeUserPassword(userData);
        if(res.success){
            toast.success("Password changed successfully!");
        }else{
            toast.error(res.message);
        }

        setNewPassword("");
        setCurrentPassword("");
        setConfirmPassword("");
    }

    return (

        <div className="bg-white p-8 overflow-auto h-full">
            <h2 className="text-2xl font-bold mb-4">Admin Management</h2>
            {/* <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src={profilePic} alt="Admin Profile" className="h-24 w-24 rounded-full" />
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
            </div> */}
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
                    <label className="block text-gray-700">Phone Number</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                {/* <div>
                    <label className="block text-gray-700">Role</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div> */}
            </div>
            <div className="flex justify-end mt-4">
                <button onClick={handleCancelChange} className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">Cancel</button>
                <button onClick={saveProfile} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Save Changes</button>
            </div>
            <div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div>
                        <label className="block text-gray-700">Current Password</label>
                        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">New Password</label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={changePassword} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Change Password</button>
                </div>
            </div>
            <hr className="my-6 border-gray-300" />
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 text-left">Name</th>
                        <th className="py-2 px-4 text-left">Email</th>
                        <th className="py-2 px-4 text-left">Phone</th>
                        <th className="py-2 px-4 text-left">Role</th>
                        <th className="py-2 px-4 text-left">Status</th>
                        <th className="py-2 px-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map(user => (
                        <tr key={user._id}>
                            <td className="py-2 px-4">{user.name}</td>
                            {/* <td className="py-2 px-4">{user.lastName}</td> */}
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.phoneNumber}</td>
                            <td className="py-2 px-4">{user.role}</td>
                            <td className="py-2 px-4">{user.isActive == false ? 'Inactive' : 'Active'}</td>
                            <td className="py-2 px-4 text-right">
                                {/* <button onClick={() => handleViewUser(user)} className="text-blue-500 hover:text-blue-700 mr-2">View</button>
                                <button onClick={() => handleEditUser(user)} className="text-yellow-500 hover:text-yellow-700 mr-2">Edit</button> */}
                                {
                                    user.isActive == false ?
                                    <button onClick={() => handleActivateUser(user._id)} className="text-green-500 hover:text-green-700 mr-2">Activate</button>
                                    :
                                    <button onClick={() => handleDeactivateUser(user._id)} className="text-red-500 hover:text-red-700 mr-2">Deactivate</button>
                                }
                                {/* <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
