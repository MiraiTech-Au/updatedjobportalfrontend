import React, { useState } from "react";
import { selectedFetchedData } from "../profile/profile.selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {
  institute,
  location,
  professionalBackground,
} from "../../assets/icons";
import ProfileCard from "../profile/modal/ProfileCard";
import Localdoc from "../../assets/svgs/52393.jpg";
import Digitaldoc from "../../assets/svgs/paper_2.jpg";
import UploadResumeModal from "../profile/modal/UploadResumeModal";
import axios from "axios";
import { setFetchedData } from "../profile";
import { useDispatch } from "react-redux";
import ChooseTemplatesModel from "./models/ChooseTemplatesModel";

const Dashboard = () => {
  const dispatch = useDispatch();
  const employee = useSelector(selectedFetchedData);
  const [showTemplates,setShowTemplates] = useState(false);
  const [updateShowResumeModal,setUpdateShowResumeModal] = useState(false);
  const { profileImage, personalInfo, profileResume, qualifications = [], _id } = employee;

  const [showAll, setShowAll] = useState(false); // State to toggle visibility

  const qualificationsToShow = showAll
    ? qualifications
    : qualifications?.slice(0, 2);

  Chart.register(CategoryScale);

  const [readMore, setReadMore] = useState(false);

  const navigate = useNavigate();

  const [dashboardOption, setDashboardOption] = useState("dashboard");
  console.log(dashboardOption);
  const data = {
    labels: [
      "2014-2015",
      "2015-2017",
      "2016-2017",
      "2017-2018",
      "2018-2019",
      "2020-2021",
      "2021-2022",
      "2023-2024",
    ],
    datasets: [
      {
        label: "Salary Growth",
        data: [
          400000, 800000, 1000000, 1200000, 1800000, 1800000, 1800000, 2400000,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        // This is where you define the x-axis as a category scale
        type: "category",
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        // Configuring the y-axis as a linear scale
        beginAtZero: true,
        title: {
          display: true,
          text: "Salary",
        },
      },
    },
  };

  const fetchedData = {
    personalDetails: {},
    aboutUs: "",
    education: [],
    experience: [],
    skills: [],
  };
  
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
      alert("Resume Updated Successfully")
    }).catch((err)=>{
      console.log(err);
    })
  
    setUpdateShowResumeModal(false);
  };


  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-3 lg:hidden">
        <div className="rounded-xl shadow-lg bg-green-gradient p-6 text-white m-3 w-full">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Job Applied</div>
            <div className="text-3xl font-bold">4</div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg bg-blue-gradient p-6 text-white m-3 w-full">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Job Saved</div>
            <div className="text-3xl font-bold">189</div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg bg-purple-gradient p-6 text-white m-3 w-full">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Available Test</div>
            <div className="text-3xl font-bold">4</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-4">
        <div className="bg-white rounded-xl shadow-2xl  mx-3 mt-3  p-6 w-full lg:w-1/3">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full border-4 border-blue-600 h-40 w-40 object-cover shadow-md"
              src={profileImage}
              alt="User"
            />
            <h1 className="mt-4 font-bold text-lg capitalize">
              {personalInfo?.firstName || personalInfo?.lastName ? 
              `${personalInfo?.firstName || ""} ${personalInfo?.lastName || ""}`.trim() : 
    "FirstName LastName"}</h1>
            <p className="text-gray-600 capitalize">{personalInfo?.currentLocation}</p>
          </div>

          <div className="mt-6 cursor-pointer">
            <div
              className={`font-bold px-4 py-3 ${
                dashboardOption === "dashboard"
                  ? "text-blue-800  bg-blue-200"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => setDashboardOption("dashboard")}
            >
              Dashboard
            </div>
            <div
              className={`font-bold p-4 ${
                dashboardOption === "profile"
                  ? "text-blue-800  bg-blue-300"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => {
                setDashboardOption("profile");
                navigate("/profile");
              }}
            >
              My Profile
            </div>
            <div
              className={`font-bold p-4 ${
                dashboardOption === "manageResume"
                  ? "text-blue-800  bg-blue-300"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => setDashboardOption("manageResume")}
            >
              Manage Resume
            </div>
            <div
              className={`font-bold p-4 ${
                dashboardOption === "applicationAndOffering"
                  ? "text-blue-800  bg-blue-300"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => setDashboardOption("applicationAndOffering")}
            >
              Application & Offering
            </div>
            <div
              className={`font-bold p-4 ${
                dashboardOption === "certification"
                  ? "text-blue-800  bg-blue-300"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => setDashboardOption("certification")}
            >
              Certification
            </div>
            <div
              className={`font-bold p-4 ${
                dashboardOption === "savedJobs"
                  ? "text-blue-800  bg-blue-300"
                  : "text-gray-600"
              }  rounded-lg`}
              onClick={() => setDashboardOption("savedJobs")}
            >
              Saved Job
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-grow">
          <ProfileCard data={fetchedData} />
       { dashboardOption==="dashboard" && ( 
          <div className=" overflow-y-scroll h-[90vh]">            
            <div className="flex flex-row px-3 sm:visible">
              <div className="rounded-xl shadow-lg bg-green-gradient p-6 text-white m-3 w-full">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Job Applied</div>
                  <div className="text-3xl font-bold">4</div>
                </div>
              </div>

              <div className="rounded-xl shadow-lg bg-blue-gradient p-6 text-white m-3 w-full">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Job Saved</div>
                  <div className="text-3xl font-bold">189</div>
                </div>
              </div>

              <div className="rounded-xl shadow-lg bg-purple-gradient p-6 text-white m-3 w-full">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">Available Test</div>
                  <div className="text-3xl font-bold">4</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mx-3">
              <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-full md:w-full">
                <div className="flex justify-between">
                  <div className="font-bold text-lg mb-4 text-start">
                    Latest Experience
                  </div>
                  <div className="font-semibold text-purple-400 text-lg mb-4 text-start">
                    Update Infromation
                  </div>
                </div>
                <div className="flex">
                  <div className="text-gray-400 font-semibold">
                    March 2017 - Nov
                  </div>
                  <div className="text-gray-800 font-semibold  ml-32">
                    PT Kulukulu meratau, Supervisor
                  </div>
                </div>
                <div className="flex">
                  <div className="text-gray-400 font-semibold">1 year</div>
                  <div className="text-gray-800  ml-56 font-extrabold">
                    {"Ux Researcher"}
                  </div>
                </div>
                <div className="text-start ml-64">
                  {readMore ? (
                    <>
                      <div>
                        A passionate and detail-oriented Full Stack Developer with
                        X years of experience specializing in the MERN stack
                        (MongoDB, Express.js, React.js, Node.js). Proven expertise
                        in developing scalable, user-friendly e-commerce
                        platforms. Successfully designed and implemented a
                        comprehensive e-commerce website that features product
                        browsing, a dynamic shopping cart, user authentication,
                        and an admin panel for product management. Skilled in
                        integrating secure payment solutions, optimizing website
                        performance for high traffic volumes, and implementing
                        responsive web design to ensure an exceptional user
                        experience across devices. Adept at collaborative
                        development and agile methodologies, with a strong focus
                        on writing clean, maintainable code. Committed to
                        leveraging modern web technologies to solve complex
                        business challenges and drive e-commerce success.{" "}
                      </div>
                      <div
                        className="text-blue-900 cursor-pointer"
                        onClick={() => setReadMore(false)}
                      >
                        Show Less...
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        A passionate and detail-oriented Full Stack Developer with
                        X years of experience specializing in the MERN stack
                        (MongoDB, Express.js, React.js, Node.js). Proven expertise
                        in developing scalable, user-friendly e-commerce
                        platforms. Successfully designed and implemented a
                        comprehensive e-commerce website that features product
                        browsing, a dynamic shopping cart, user authentication,
                        and an admin panel for product management.{" "}
                      </div>
                      <div
                        className="text-blue-900 cursor-pointer"
                        onClick={() => setReadMore(true)}
                      >
                        Read More...
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-full md:w-full">
                <div className="flex justify-between">
                  <div className="font-bold text-lg mb-4 text-start">
                    Latest Education
                  </div>
                  <div className="font-semibold text-purple-400 text-lg mb-4 text-start">
                    Update Infromation
                  </div>
                </div>
                <div>
                  {qualificationsToShow?.map((each, index) => (
                    <div className="flex mt-4" key={index}>
                      <div className="flex flex-col">
                        <div className="flex mt-4">
                          <div className="flex flex-col">
                            <div className="text-gray-400 font-semibold text-start">
                              {`${each.startYear}-${each.endYear}`}
                            </div>
                            <div className="text-gray-400 font-semibold text-start">
                              {`${each.courseType}`}
                            </div>
                          </div>
                          <div className="flex flex-col ml-32">
                            <div className="text-gray-800 font-semibold">
                              {each.education}
                            </div>
                            <div className="text-gray-800 font-semibold text-start flex flex-row ">
                              <div className="justify-center items-center pt-2 pr-2 ">
                                <img src={institute} alt="institute" className="h-3 w-3 " />
                              </div>
                              <div>{`${each.instituteName}`}</div>
                            </div>
                            <div className="text-gray-800 font-semibold text-start flex flex-row ">
                              <div className="justify-center items-center pt-2 pr-2 ">
                                <img src={location} alt="location" className="h-3 w-3 " />
                              </div>
                              <div>{`${each.location}`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {qualifications?.length > 2 && (
                    <div
                      className="text-blue-800 cursor-pointer flex justify-start"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? "Show Less..." : "Show More..."}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-full md:w-full">
                <div className="flex">
                  <div className="font-bold text-lg mb-4 text-start">
                    Salary Information
                  </div>
                </div>
                <Bar data={data} options={options} />
              </div>

              <div className="flex flex-row">
                <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-full md:w-full">
                  <div className="flex justify-between">
                    <div className="font-bold text-lg mb-4 text-start">
                      Recent Activity
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      src={professionalBackground}
                      alt="About me"
                      className="h-16 w-16"
                    />
                    <div className="text-gray-800 font-extrabold  ml-6">
                      Lead Software Engineer
                    </div>
                  </div>
                  <div className="text-start ">
                    <>A passionate and detail-oriented Full Stack Developer.</>
                  </div>
                  <div className="flex justify-start">
                    <button className="bg-white hover:bg-gray-50 text-blue-800 font-bold py-1 px-2 rounded-xl min-w-[10rem] max-w-xs mt-4 border border-gray-400">
                      Applied
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 m-3 w-full md:w-full">
                  <div className="flex justify-between">
                    <div className="font-bold text-lg mb-4 text-start">
                      Recomended Job
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      src={professionalBackground}
                      alt="About me"
                      className="h-16 w-16"
                    />
                    <div className="text-gray-800 font-extrabold  ml-6">
                      Associate Software Engineer
                    </div>
                  </div>
                  <div className="text-start ">
                    Skills: Reactjs, Nodejs, TypeScript, MongoDB, Strong
                    Communication Skills.
                  </div>

                  <div className="flex justify-start">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-xl min-w-[10rem] max-w-xs mt-4">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )} 

          {
            dashboardOption === "manageResume" && (
              <div className="">
                <div className="min-h-[50vh] border m-2 p-4 bg-white shadow-lg rounded-lg">
                  <h1 className="text-center text-gray-600 text-3xl font-semibold">My Documents</h1>
                  <div className="flex justify-evenly items-start mt-5">
                      <div className="m-2">
                          {profileResume ?
                          (<div className="border text-center shadow-md rounded-lg p-4 hover:cursor-pointer hover:bg-gray-100">
                            <img src={Localdoc} alt="localdoc" className="w-40 h-40 p-3"/>
                            <p className="text-sm mt-2 ">My Resume.pdf</p>
                          </div>) : (
                            <div>
                              <p>Resume Not Added Yet</p>
                            </div>
                          )}
                          <div className="flex flex-col mt-3 text-md">
                            <button className="bg-blue-600 text-white mx-4 p-2 hover:bg-blue-800 rounded-md" onClick={()=>setUpdateShowResumeModal(true)}>Update Resume</button> 
                            {profileResume && <button className="mt-3 underline" onClick={() => window.open(profileResume)}>Download</button>} 

                          </div>
                        </div>
                        {
                          updateShowResumeModal && (
                            <UploadResumeModal
                              onSave={handleSaveResume}
                              onClose={() => setUpdateShowResumeModal(false)}
                            />
                          )
                        }
                      <div>
                        <div className="border text-center shadow-md rounded-lg m-2 p-4 hover:cursor-pointer hover:bg-gray-100" onClick={()=>setShowTemplates(true)}>
                          <img src={Digitaldoc} alt="digitaldoc" className="w-40 h-40"/>
                          <p className="text-sm mt-2 ">Create Digital Resume</p>
                        </div> 
                      </div>
                  </div>  
                    {showTemplates && (
                      <ChooseTemplatesModel
                        onClose={() => setShowTemplates(false)}
                      />
                      )}            
                </div>
              </div>
            )
          }

 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
