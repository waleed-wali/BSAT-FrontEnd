import React, { useState } from 'react';
import InputField from '../components/Login/InputField';
import CustomButton from '../components/Login/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    console.log("Attempting to create account with:", { email, password, fullName });
    // Here, you would typically send this data to your server for processing
    // Assuming the account creation is successful:
    navigate(); // Navigate to the home page or dashboard after account creation
  };

  return (
    <div className="flex flex-col h-screen bg-[linear-gradient(170deg,_#38B2AC,#2f3d40_50%,_#FFFFFF_50%)]">
      {/* Navbar-like top bar with Links */}
      <div className="flex justify-between items-center p-4 w-full bg-transparent">
        <Link >
          <img src={IMAGES.logo} alt="Company Logo" className="h-10 w-auto" />
        </Link>
        <Link to="/login">
          <CustomButton title="Sign In" />
        </Link>
      </div>
      {/* Main content area */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-10 bg-white bg-opacity-90 shadow-lg rounded-lg max-w-sm">
          <h1 className="text-2xl font-semibold mb-2 text-center">Sign Up to BSAT</h1>
          <p className="mb-6 text-sm text-center text-gray-600">Quick & Simple way to Automate your payment</p>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <InputField placeholder="Full Name" onchangeText={setFullName} type="text" />
            <InputField placeholder="Email Address" onchangeText={setEmail} type="email" />
            <InputField placeholder="Password" onchangeText={setPassword} type="password" />
            <CustomButton title="Create an Account" />
          </form>
          <div className="mt-4">
            <button
              type="button"
              className="w-full p-2 bg-white text-teal-500 border border-teal-500 rounded hover:bg-gray-100 flex justify-center items-center"
            >
              <img src={IMAGES.GLogo} alt="Google sign-in" className="h-6 w-6 mr-4" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
