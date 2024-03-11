import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateUser } from "./profile.action";
import { selectedFetchedData } from "./profile.selector";
import ProfileCard from "./modal/ProfileCard";
import { setFetchedData } from ".";
import axios from "axios";
import {
  addDocuments,
  briefCase,
  calendar,
  edit,
  location,
  mail,
  phone,
  verifyed,
  wallet,
} from "../../assets/icons";
import UploadProfileImageModal from "./modal/UploadProfileImageModal";
import EditProfileModal from "./modal/EditProfileModal";
import EducationComponent from "./profileComponents/EducationComponent";
import ExperienceComponent from "./profileComponents/ExperienceComponent";
import AccomplishmentComponent from "./profileComponents/AccomplishmentComponent";
import AboutMeComponent from "./profileComponents/AboutMeComponent";
import CareerProfileComponent from "./profileComponents/CareerProfileComponent";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import UploadResumeModal from "./modal/UploadResumeModal";
import { MdOutlineCloudDownload } from 'react-icons/md'; // Importing the download icon
import Localdoc from "../../assets/svgs/52393.jpg";
import { AiFillEdit } from 'react-icons/ai'; // For editing or updating the resume

const profileStatus = [
    {currentStatus: 'Not Approved', color: 'text-red-500', colorCode: '#EF4444;'},
    {currentStatus: 'Pending', color: 'text-yellow-500', colorCode: '#F59E0B'},
    {currentStatus: 'Approved',  color: 'text-green-500', colorCode: '#10B981'},
]

const Profile = () => {
  const dispatch = useDispatch();
  //fetch single user
  const employee = useSelector(selectedFetchedData);
  const { personalInfo ={}, email ='', profileImage = '',profileResume='', professionalInfo = {}, aboutMeDescription = {}, qualifications={},employmentHistory ={}, additionalInfo={}, _id =''} = employee;

  const fetchedData = {
    personalDetails: {},
    aboutUs: "",
    education: [],
    experience: [],
    skills: [],
    profileImage:"",
    profileResume:""
  };

  // const globalVariable = useSelector(selectGlobalVariable);
 const [showResumeModal, setShowResumeModal] = useState(false);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  
  // //we will update in that state
  // const handleSavePersonalDetails = (details) => {
  //   // setData({ ...data, personalDetails: details });
  //   dispatch(
  //     updateUser({ personalInfo: { ...personalInfo, ...details } }, _id)
  //   ).then((res) => dispatch(setFetchedData(res.payload)));
  //   setShowPersonalModal(false);
  // };

  // const handleSaveAboutUs = (aboutUsDescription) => {
  //   dispatch(updateUser({ aboutMeDescription: aboutUsDescription})).then(
  //     (res) => {
  //       dispatch(setFetchedData(res.payload));
  //     }
  //   );
  //   setShowAboutModal(false);
  // };


  const handleSaveResume = async(resumeFile) => {
    console.log(resumeFile);
    const formData = new FormData();
    formData.append("resume", resumeFile);
    const jwtToken = localStorage.getItem('jwtToken'); 

    if (!jwtToken) {
      console.error('JWT token not found. Please login.');
      return;
    }
  
    // Set the Authorization header with the JWT token
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', // This line is often not necessary as browsers set the correct content type for FormData, but it's included here for completeness
        'Authorization': `Bearer ${jwtToken}` // Include the JWT token here
      }
    };
  
    await axios.put(`http://localhost:9000/api/employee/v1/upload/resume/${_id}`, formData, config).then((res)=>{
      dispatch(setFetchedData(res.data));
    }).catch((err)=>{
      console.log(err);
    })
  
    setShowResumeModal(false);
  };


  const handleSaveImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    const jwtToken = localStorage.getItem('jwtToken'); 

    if (!jwtToken) {
      console.error('JWT token not found. Please login.');
      return;
    }
  
    // Set the Authorization header with the JWT token
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data', // This line is often not necessary as browsers set the correct content type for FormData, but it's included here for completeness
        'Authorization': `Bearer ${jwtToken}` // Include the JWT token here
      }
    };
  
    await axios.put(`http://localhost:9000/api/employee/v1/upload/profile/${_id}`, formData, config).then((res)=>{
      dispatch(setFetchedData(res.data));
    }).catch((err)=>{
      console.log(err);
    })
    // dispatch(updateProfile({formData, _id}))
      // .then((res) => 
      // {
      //   console.log(res);
      //   dispatch(setFetchedData(res.data))}
      // ).catch((err)=>{console.log(err)})


    setShowFileUploadModal(false);
  };

  const handleUpdateProfile = (values) => {
    dispatch(updateUser({ personalInfo: { ...values }, id: _id })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload));
        setShowEditProfileModal(false);
      }
    });
  };


  let radius = 50;
  let circumference = 2 * Math.PI * radius; 
  let percent = 100;
  return (
    <div className="container mx-auto mt-4">
    <div className="flex justify-start items-center mb-2">
        <GrFormPreviousLink className="text-blue-700 text-2xl"/>
        <Link to="/" className="float-left  ml-2 text-blue-700 text-md font-semibold underline">Go to Dashboard</Link>
      </div>

      <ProfileCard data={fetchedData} />



      <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full">
        <h2 className="text-start text-xl font-bold p-4">
          Personal Information
        </h2>
        <hr className="border-t mx-4" />
        <div className="my-6 flex flex-col items-center md:flex-row md:items-start cursor-pointer">
          <svg
            className="w-40 h-40"
            viewBox="0 0 120 120"
            onClick={() => setShowFileUploadModal(true)}
          >
            <defs>
              <clipPath id="circleView">
                <circle cx="60" cy="60" r={radius - 5} />
              </clipPath>
            </defs>
            <g clipPath="url(#circleView)">
              <image
                href={profileImage}
                x="10"
                y="10"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
            <circle
              className="text-gray-300"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r={radius} // Adjust the radius as needed
              cx="60" // Center of the SVG width
              cy="60" // Center of the SVG height
            />
            <circle
              className={`${profileStatus[2].color}`} // Change color to match your green
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (percent / 100) * circumference}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius} // Adjust the radius as needed
              cx="60" // Center of the SVG width
              cy="60" // Center of the SVG height
              transform="rotate(-90 60 60)" // Corrected rotation at the center
            />
            <rect
              x="30%"
              y="110"
              width="80"
              height="20"
              fill={profileStatus[2].colorCode}
              rx="10"
              ry="10"
              transform="translate(-15, -10)"
            />
            <text
              x="50%"
              y="111"
              fill={`white`}
              fontSize="10"
              fontWeight={650}
              fontFamily="Arial"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {`${profileStatus[2].currentStatus}`}
            </text>
          </svg>

          <div className="px-4 md:px-6 lg:px-8 flex flex-col text-left">
            <div className="flex items-center">
              <div className="font-bold text-xl text-gray-800 capitalize">
                { personalInfo?.firstName && personalInfo?.lastName ? `${personalInfo?.firstName} ${personalInfo?.lastName}` : "FirstName LastName"}
              </div>
              <button onClick={() => setShowEditProfileModal(true)}>
                <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
              </button>
              {showEditProfileModal && (
                <EditProfileModal
                  email={email}
                  personalInfo={personalInfo}
                  onSave={handleUpdateProfile}
                  onClose={() => setShowEditProfileModal(false)}
                />
              )}
              {showFileUploadModal && (
                <UploadProfileImageModal
                  onSave={handleSaveImage}
                  onClose={() => setShowFileUploadModal(false)}
                />
              )}
            </div>
            <div className="mt-2">
              <div className="flex flex-col">
              
                <div className="flex space-x-4 md:space-x-12 lg:space-x-72">
                  {/* <div className="font-semibold text-sm text-gray-500">
                    at MiraiTech
                  </div> */}
                  <div className="flex">
                    <div className="font-medium text-sm text-gray-400">
                      Profile last update -{" "}
                    </div>
                    <div className="font-semibold text-sm text-gray-500">
                      Today
                    </div>
                  </div>
                </div>
                <div className="border border-1 my-4" />
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className=" lg:mr-8">
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={location} alt="location" className="h-3 w-3 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600 capitalize">
                        { personalInfo?.currentLocation ?  `${personalInfo?.currentLocation}` : "Current Location"}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={briefCase} alt="briefcase" className="h-3 w-3 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600">
                        {`${personalInfo?.totalExperienceYear || '0'} Year ${personalInfo?.totalExperienceMonth || '0'} Months`}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={wallet} alt="wallet" className="h-3 w-3 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600">
                      {personalInfo?.salary ? `$${personalInfo?.salary}`: "Current Salary"}
                      </div>
                      <div className="my-2 mx-2 font-bold text-xs mt-[6px] text-blue-600">
                        Add Breakup
                      </div>
                    </div>
                  </div>
                  <div className="border border-1 my-4 md:my-4 lg:my-0" />
                  <div className="lg:ml-8">
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={phone} alt="phoneno" className="h-3 w-3 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600">
                      {personalInfo?.primaryContact ? `${personalInfo?.primaryContact}` : "Phone No."}
                      </div>
                      <div className="my-2 mx-2 font-bold text-xs mt-[6px] text-blue-600">
                        Verify
                      </div>
                    </div>
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={mail} alt="mail" className="h-4 w-4 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600">
                        {email}
                      </div>
                      <img src={verifyed} alt="email verify" className="h-4 w-4 ml-1 mt-2" />
                    </div>
                    <div className="flex">
                      <div className="justify-center items-center pt-2 pr-2">
                        <img src={calendar} alt="calender" className="h-3 w-3 " />
                      </div>
                      <div className="my-1 font-medium text-sm text-gray-600">
                      {personalInfo?.noticePeriod ? `${personalInfo?.noticePeriod}` : "Notice Period"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutMeComponent aboutMeDescription={aboutMeDescription} id={_id}/>

      <CareerProfileComponent professionalInfo={professionalInfo} _id={_id}/>

      <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10">
        <h2 className="text-start text-xl font-bold p-4">Add documents</h2>
        <hr className="border-t mx-4" />
        {profileResume ? (
          <div className="flex flex-col md:flex-row justify-evenly  items-center mt-2">

          
          <div className="flex flex-col items-center">
            <div className="p-2 border rounded-md shadow-lg m-2">
              <img src={Localdoc} alt="localdoc" className="w-40 h-40 p-3"/>
              <p className="text-center">Resume.pdf</p>
            </div>
            </div>
          {/* Download Button with Icon */}
          <div className="flex flex-col ">
          <button 
            className="inline-flex items-center px-4 py-2 justify-center mt-2 bg-blue-500 hover:bg-blue-700 text-white  rounded cursor-pointer"
            onClick={()=>setShowResumeModal(true)}
          >
            <AiFillEdit className="mr-2" /> Update Resume
          </button>
          
          <button 
            className="inline-flex items-center px-4 py-2 justify-center mt-2 bg-blue-500 hover:bg-blue-700 text-white   rounded cursor-pointer"
            onClick={() => window.open(profileResume)}
          >
            <MdOutlineCloudDownload className="mr-2" /> Download 
          </button>
          </div>
        </div>
        ) : (
          <div>
            <div className="flex items-center justify-center p-4">
              <img src={addDocuments} alt="About me" className="h-32 w-32" />
            </div>
            <h3 className="font-bold text-xl text-center p-4">Add documents</h3>
            <p className="text-center px-4">doc, docx, pdf, jpg, jpeg, png.</p>
            <p className="text-center px-4">
              Uploaded documents can ve attached to future online applications.
            </p>
            <div className="flex justify-center items-center py-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl min-w-[10rem] max-w-xs"
              onClick={()=>setShowResumeModal(true)}
              >
                Fill In Now
              </button>
            </div>
          </div>)}
          {showResumeModal && (
                <UploadResumeModal
                 onSave={handleSaveResume}
                  onClose={() => setShowResumeModal(false)}
                />
              )}
      </div>

      <EducationComponent qualifications={qualifications} _id={_id}/>

      <ExperienceComponent employmentHistory ={employmentHistory} _id={_id}/>
    
      <AccomplishmentComponent additionalInfo={additionalInfo} _id={_id}/>

    </div>
  );
};

export default Profile;
