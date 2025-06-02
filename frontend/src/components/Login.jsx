import React, { useState } from 'react';
import Header from './header'; 
import axios from 'axios'; 
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import  {setLoading, setUser}  from '../redux/userSlice.js';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [name,setName]= useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

const isLoading = useSelector(store => store.app.isLoading)

  const getInputData = async (e) => { 
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLogin) {
      const user = { email, password };
      // console.log("Login request user: ", user);
      try {
        const res = await axios.post(
          'http://localhost:8000/api/v1/user/login',
          user,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
    
        // console.log("Login API Response: ", res.data);
    
        if (res.data.success) {
          toast.success(res.data.message);
    
          if (res.data.user) {
            // console.log("Dispatching user: ", res.data.user);
            dispatch(setUser(res.data.user));
          } else {
            console.error("Login successful but user data missing in response.");
          }
    
          navigate('/browse');
        }
      } catch (error) {
        console.error("Login Error: ", error);
        toast.error(error.response?.data?.message || "Login failed");
      } finally {
        dispatch(setLoading(false))
      }
    } else {

    dispatch(setLoading(true));
      const user = { name, email, password };
      // console.log("Register request user: ", user);
      try {
        const res = await axios.post(
          'http://localhost:8000/api/v1/user/register',
          user,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
    
        console.log("Register API Response: ", res.data);
    
        if (res.data.success) {
          toast.success(res.data.message);
    
          if (res.data.user) {
            // console.log("Dispatching user after register: ", res.data.user);
            dispatch(setUser(res.data.user));
          } else {
            console.error("Register successful but user data missing in response.");
          }
    
          setIsLogin(true); // Switch to Login
        }
      } catch (error) {
        console.error("Register Error: ", error);
        toast.error(error.response?.data?.message || "Registration failed");
      } finally
      {  dispatch(setLoading(false))}
    }
    setEmail("")
    setPassword("");
    setName("");
  }

  return (
    <>
    <Header />
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/assets/bg3.jpg')`, // Direct path without env
      }}
    >


      {/* Form Container */}
      <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={getInputData} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-red-600 rounded text-white hover:bg-red-700 transition-colors">
  {isLoading ? "Loading..." : "Login"}
</button>

            <p className="text-sm text-center mt-2">
              New to Netflix?{' '}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register
              </span>
            </p>
          </form>
        ) : (
          /* Sign Up Form */
          <form onSubmit={getInputData} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
              value={name} onChange={(e)=>{
                setName(e.target.value);
              }}
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                value={email} onChange={(e)=>{
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                value={password} onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            <button type="submit" className="w-full py-2 bg-red-600 rounded text-white hover:bg-red-700 transition-colors">
  {isLoading ? "Loading..." : "Sign Up"}
</button>

            <p className="text-sm text-center mt-2">
              Already have an account?{' '}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
    </>
  );
};

export default Login;