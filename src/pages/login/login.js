import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '.';

import GOOGLE_ICON from "../../assets/icons/google_icon.png"
import LINKEDIN_ICON from "../../assets/icons/linkedin_icon.png"
import MICROSOFT_ICON from "../../assets/icons/microsoft_icon.png"
import { setFetchedData } from '../profile';


const Login = () => {
  const dispatch = useDispatch(); 
//   const fetchedData = useSelector(selectedFetchedData);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch(loginUser({email, password})).then((res)=>{
        dispatch(setFetchedData(res.payload.user))
        alert("Login Successfully")
        navigate('/')
        });
  };

  const loginWithGoogle = async () =>{
    try {
      // Directly navigating to the OAuth URL, assuming it initiates the OAuth flow.
      window.location.href = 'http://localhost:9000/auth/google';
    } catch (error) {
      console.error('Google login error:', error);
    }
  }
  // const loginWithGoogle = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:9000/auth/google/callback');
  //     window.location.href = response.data.redirectUrl;
  //   } catch (error) {
  //     console.error('Google login error:', error);
  //   }
  // };


  const loginWithLinkedin =async() =>{
    window.open('http://localhost:9000/auth/linkedin',"_self")

  }
 
  useEffect(() => {
    const storeTokenAndRedirect = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      
      if (token) {
        localStorage.setItem('jwtToken', token);
        window.location.href = '/'; // Redirect to the profile page
      }
    };
  
    storeTokenAndRedirect();
  }, []);


  return (
    <div className="h-screen flex items-center justify-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login Form</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              
            >
              Login
            </button>
          </div>
            <p className='cursor-pointer' onClick={()=>navigate('/signup')}>New to Jobseekuser? Sign Up now</p>
        </form>


        {/* <GoogleLogin
                onSuccess={credentialResponse => {
                    handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /> */}


              <div className='flex justify-center items-center mt-5'>
                  <img src={GOOGLE_ICON} alt='google' className='w-8 h-8 cursor-pointer ' onClick={loginWithGoogle}/>
                  <img src={LINKEDIN_ICON} alt='linkedin' className='w-8 h-8 ml-8 cursor-pointer' onClick={loginWithLinkedin}/>
                  <img src={MICROSOFT_ICON} alt='microsoft' className='w-8 h-8 ml-8 cursor-pointer'/>
              </div>
      </div>
    </div>
  );
};

export default Login;
