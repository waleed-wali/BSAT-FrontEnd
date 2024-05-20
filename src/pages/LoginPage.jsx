import React, { useState } from 'react';
import InputField from '../components/Login/InputField';
import CustomButton from '../components/Login/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("email: ", email);
    console.log("password: ", password);
    navigate();
  }

  return (
    <div className="flex flex-col h-screen bg-[linear-gradient(170deg,_#008080,#353438_50%,_#FFFFFF_50%)]">
      {/* Navbar with Links */}
      <div className="flex justify-between items-center p-4 w-full bg-transparent">
        <Link>
          <img src={IMAGES.logo} alt="Company Logo" className="h-10 w-auto" />
          
        </Link>
        <Link to="/signup">
          <CustomButton title="Sign Up" />
        </Link>
      </div>
      {/* Main content area - Ensuring content is visible against the background */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-10 bg-white bg-opacity-90 shadow-lg rounded-lg max-w-sm">
          <h1 className="text-2xl font-semibold mb-2 text-center">Log In to BSAT</h1>
          <p className="mb-6 text-sm text-center text-gray-600">Quick & Simple way to Automate your payment</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
            <InputField placeholder={"Email Address"} onchangeText={setEmail} type={"email"} />
            <InputField placeholder={"Password"} onchangeText={setPassword} type={"password"} />
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-teal-600 mr-2" />
                Remember Me
              </label>
              <Link to="/forgetpassword" className='text-sm text-teal-600 hover:underline'>
                Forget Password?
              </Link>
            </div>
            <CustomButton title={"Proceed"} handleClick={handleLogin} />
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
          <p className="mt-6 text-xs text-center text-gray-400">© 2021 - 2024 All Rights Reserved. Company</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
