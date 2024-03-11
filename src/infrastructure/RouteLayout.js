import { Route, Routes, useNavigate } from "react-router";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import  Profile  from "../pages/profile/profile";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard";
import SignUp from "../pages/signup/signup";
import { getUser } from "../pages/profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MainLayout from "./MainLayout";
import ResumeHomePage from "../pages/resume-section/resumeHomepage";

const RoutesLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
		const storedToken = localStorage.getItem('jwtToken')
		if (storedToken) {
      
      dispatch(getUser()).catch((err)=>{
        console.error("Error during getUser dispatch: ", err); // Optional: log the error or handle it as needed
        navigate('/login');
      })
		}else
    {
      navigate('/login')
    }
	}, [])
  return (
    <Routes>
       <Route exact path="/" element={<MainLayout><Dashboard /></MainLayout>} />
      <Route exact path="/home" element={<MainLayout><HomePage /></MainLayout>} />
      <Route exact path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      <Route exact path="/resume-homepage" element={<MainLayout><ResumeHomePage /></MainLayout>} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  );
};

export default RoutesLayout;
