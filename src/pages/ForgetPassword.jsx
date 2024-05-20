import React, { useState } from 'react';
import InputField from '../components/Login/InputField';
import CustomButton from '../components/Login/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
function ForgetPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("email: ", email);
    navigate();
  }

  return (
     <div className="flex flex-col h-screen bg-[linear-gradient(170deg,_#008080,#353438_50%,_#FFFFFF_50%)]">
      {/* Navbar with Links */}
      <div className="flex justify-between items-center p-4 w-full bg-transparent">
        <Link>
          <img src={IMAGES.logo} alt="Company Logo" className="h-10 w-auto" />
        </Link>
        <Link to="/login">
          <CustomButton title="Sign In" />
        </Link>
      </div>
      {/* Main content area - Ensuring content is visible against the background */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-10 bg-white bg-opacity-90 shadow-lg rounded-lg max-w-sm">
          <h1 className="text-2xl font-semibold mb-2 text-center">Forget Password</h1>
          <p className="mb-6 text-sm text-center text-gray-600">Quick & Simple way to Automate your payment</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
            <InputField placeholder={"Email Address"} onchangeText={setEmail} type={"email"} />
            <div className="flex justify-between items-center">

            </div>
            <CustomButton title={"Proceed"} handleClick={handleLogin} />
          </form>
          <p className="mt-6 text-xs text-center text-gray-400">© 2021 - 2024 All Rights Reserved. Company</p>
        </div>
      </div>
     </div>
  );
}

export default ForgetPassword;
