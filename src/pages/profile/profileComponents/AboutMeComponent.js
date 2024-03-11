import React, { useEffect, useState } from "react";
import { aboutMe, edit } from "../../../assets/icons";
import AboutMeModal from "../modal/AboutMeModal ";
import { updateUser } from "../profile.action";
import { useDispatch } from "react-redux";
import { setFetchedData } from "../.";
import MultiSelectDropdown from "../../helpers";

const AboutMeComponent = ({
  id,
  aboutMeDescription = {
    resumeHeadline: "",
    keySkills: [],
    careerSummary: "",
  },
}) => {
  const dispatch = useDispatch();
  const [isCarrerProfileExpanded, setIsCarrerProfileExpanded] = useState(false);
  const [shouldShowResumeHeadLineModal, setShouldShowResumeHeadLineModal] =
    useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [key, setKey] = useState("keySkills");
  const [shouldEditKeySkills, setShouldEditKeySkills] = useState(
    !!aboutMeDescription.keySkills
  );
  useEffect(() => {
    setShouldEditKeySkills(!!aboutMeDescription?.keySkills);
  }, []);

  const handleSaveAboutUs = (value) => {
    dispatch(
      updateUser({
        id,
        aboutMeDescription: {
          ...aboutMeDescription,
          [key]: value,
        },
      })
    ).then((res) => {
      dispatch(setFetchedData(res.payload));
      setShouldShowResumeHeadLineModal(false);
      setShouldEditKeySkills(false);
    });
  };
  return (
    <>
      {shouldShowResumeHeadLineModal && (
        <AboutMeModal
          title={modalTitle}
          onClose={() => setShouldShowResumeHeadLineModal(false)}
          onSave={handleSaveAboutUs}
          modalKey={key}
          existingDescription={aboutMeDescription}
        />
      )}
      <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10">
        <h2 className="text-start text-xl font-bold p-4">About Me</h2>
        <hr className="border-t mx-4" />
        {aboutMeDescription ? (
          <div>
            <div className="p-4">
              <h3 className="font-bold text-md text-start py-2">
                Resume Headline
              </h3>
              {aboutMeDescription?.resumeHeadline ? (
                <div className="flex">
                  <div className="text-start ">
                    {aboutMeDescription.resumeHeadline}
                  </div>
                  <div className=" items-end">
                    <img
                      className="ml-4 w-4 h-4 mt-1 cursor-pointer"
                      src={edit}
                      alt="Edit Icon"
                      onClick={() => {
                        setModalTitle("Resume Headline");
                        setKey("resumeHeadline");
                        setShouldShowResumeHeadLineModal(true);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-start py-2">
                    Which about your resume headline.
                  </h3>
                  <div className="flex justify-start py-2">
                    <button
                      onClick={() => {
                        setModalTitle("Resume Headline");
                        setKey("resumeHeadline");
                        setShouldShowResumeHeadLineModal(true);
                      }}
                      className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start"
                    >
                      Add
                    </button>
                  </div>
                  <hr className="border-t mt-4" />
                </>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-md text-start py-2">
                Career Summary
              </h3>
              {aboutMeDescription?.careerSummary ? (
                <div className="flex">
                  <div className="text-start">
                    {aboutMeDescription.careerSummary}
                  </div>
                  <div className="items-end">
                    <img
                      className="ml-4 w-4 h-4 mt-1 cursor-pointer"
                      src={edit}
                      alt="Edit Icon"
                      onClick={() => {
                        setModalTitle("Career Summary");
                        setKey("careerSummary");
                        setShouldShowResumeHeadLineModal(true);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-start py-2">
                    What is your highest level of education?
                  </h3>
                  <div className="flex justify-start py-2">
                    <button
                      onClick={() => {
                        setModalTitle("Career Summary");
                        setKey("careerSummary");
                        setShouldShowResumeHeadLineModal(true);
                      }}
                      className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start"
                    >
                      Add
                    </button>
                  </div>
                  <hr className="border-t mt-4" />
                </>
              )}
            </div>

            <div className="p-4">
  <h3 className="font-bold text-md text-start py-2">Key Skills</h3>
  {!shouldEditKeySkills ? (
    <div className="flex justify-between">
      <div className="text-start">
        {aboutMeDescription?.keySkills?.length>0 ? (
          <>
            {aboutMeDescription?.keySkills?.map((each) => (
              <div key={each.id} className="inline-block p-2 border border-gray-300 shadow-md rounded text-blue-800 mr-2 mb-2">
                {each.label}
              </div>
            ))}
          </>
        ) : (
          <p>No key skills added.</p>  
          )}
      </div>
      <div className="flex items-center">  {/* Adjusted for vertical alignment */}
        <img
          className="ml-4 w-4 h-4 cursor-pointer"
          src={edit}
          alt="Edit Icon"
          onClick={() => {
            setModalTitle("Resume Headline");
            setKey("keySkills");
            setShouldEditKeySkills(true);
          }}
        />
      </div>
    </div>
  ) : (
    <>
      <h3 className="text-start py-2">What are your key skills?</h3>
      <MultiSelectDropdown
        onSave={(values) => handleSaveAboutUs(values)}
        onClose={() => setShouldEditKeySkills(false)}
        selectedValues={aboutMeDescription?.keySkills}  // Safely access keySkills
      />
      <hr className="border-t mt-4" />
    </>
  )}
</div>
</div>
        ) : (
          <>
            <div className="flex items-center justify-center p-4">
              <img src={aboutMe} alt="About me" className="h-24 w-24" />
            </div>
            <h3 className="font-bold text-xl text-center p-4">About Me</h3>
            <p className="text-center px-4">
              Help us to show more suitable jobs by telling us a little more
              about yourself.
            </p>
            <div className="flex justify-center items-center py-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl min-w-[10rem] max-w-xs"
                onClick={() => {
                  setIsCarrerProfileExpanded(true);
                }}
              >
                Fill In Now
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AboutMeComponent;

