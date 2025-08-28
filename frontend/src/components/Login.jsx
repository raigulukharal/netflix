import React, { useState } from 'react';
import Header from './Header';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';
import { authAPI } from '../services/api';
import { authMessages } from '../constants/messages';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(setLoading(true));

  try {
    // sanitize email
    const cleanEmail = formData.email.trim().toLowerCase();

    // payload decide karo
    const payload = isLogin 
      ? { email: cleanEmail, password: formData.password }
      : { 
          name: formData.name.trim(), 
          email: cleanEmail, 
          password: formData.password 
        };

    const endpoint = isLogin ? authAPI.login : authAPI.register;
    const res = await endpoint(payload);

    if (res.data.success) {
      toast.success(res.data.message);
      dispatch(setUser(res.data.user));
      
      if (isLogin) {
        navigate('/browse');
      } else {
        setIsLogin(true); // registration ke baad login page par
      }
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || 
      (isLogin ? authMessages.loginError : authMessages.registerError)
    );
  } finally {
    dispatch(setLoading(false));
    setFormData({ email: '', password: '', name: '' });
  }
};

  return (
    <>
      <Header />
      <div className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url('/assets/bg3.jpg')` }}>
        
        <div className="bg-black bg-opacity-70 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-center">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-red-600 rounded text-white hover:bg-red-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : (isLogin ? "Login" : "Sign Up")}
            </button>

            <p className="text-sm text-center mt-2">
              {isLogin ? 'New to Nextflix?' : 'Already have an account?'}{' '}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Register' : 'Login'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;