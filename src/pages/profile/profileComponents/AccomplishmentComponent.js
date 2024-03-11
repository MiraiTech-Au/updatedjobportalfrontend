import React, { useState } from 'react'
import { edit } from '../../../assets/icons';
import EditOnlineProfileModel from "../modal/extramodel/EditOnlineProfileModel";
import EditCertificationModel from "../modal/extramodel/EditCertificationModel";
import EditLanguagesModel from "../modal/extramodel/EditLanguagesModel";
import EditPatentsModel from "../modal/extramodel/EditPatentsModel";
import EditResearchModel from "../modal/extramodel/EditResearchModel";
import EditWorkSampleModel from "../modal/extramodel/EditWorkSampleModel";
import { useDispatch } from 'react-redux';
import { setFetchedData } from '../.'; // Adjust import path as necessary
import {updateUser} from "../profile.action";

const AccomplishmentComponent = ({additionalInfo,_id}) => {
    const dispatch = useDispatch();
    const [showOnlineProfileModal, setShowOnlineProfileModal] = useState(false);
    const [showWorkSampleModal, setShowWorkSampleModal] = useState(false);
    const [showLanguagesModal, setShowLanguagesModal] = useState(false);
    const [showCertificationModal, setShowCertificationModal] = useState(false);
    const [showPatentsModal, setShowPatentsModal] = useState(false);
    const [showResearchModal, setShowResearchModal] = useState(false);
    //for update with using id
    const [currentEditingProfileId, setCurrentEditingProfileId] = useState(null);
    const [currentEditingWorkId, setCurrentEditingWorkId] = useState(null);
    const [currentEditingLanguageId, setCurrentEditingLanguageId] = useState(null);
    const [currentEditingCertificateId, setCurrentEditingCertificateId] = useState(null);
    const [currentEditingResearchId, setCurrentEditingResearchId] = useState(null);
    const [currentEditingPatentId, setCurrentEditingPatentId] = useState(null);
   
//Online Profile

const handleEditOnlineProfileClick = (id) =>{
    setCurrentEditingProfileId(id);
    setShowOnlineProfileModal(true);
  }
  const handleAddOnlineProfileClick = () =>{
    setCurrentEditingProfileId(null);
    setShowOnlineProfileModal(true);
  }
  
  
  // const handleUpdateOnlineProfile = (values) =>{

  //   // Determine if we're adding a new profile or updating an existing one
  //   let updatedProfiles;
  //   if (currentEditingProfileId) {
  //     // Update existing profile
  //     updatedProfiles = additionalInfo?.onlineProfile.map(profile =>
  //       profile._id === currentEditingProfileId ? { ...profile, ...values } : profile
  //     );
  //   } else {
  //     // Add new profile with a unique ID
  //     const newProfile = { ...values }; // Assign a new ID for example
  //     updatedProfiles = [...additionalInfo.onlineProfile, newProfile];
  //   }
  
  //   const updatedAdditionalInfo = {
  //     ...additionalInfo,
  //     onlineProfile: updatedProfiles,
  //   };
  
  //   // Dispatch the update action with the updated profiles array
  //   dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id:_id })).then((res) => {
  //     if (res.payload) {
  //       if (!Array.isArray(res.payload.additionalInfo.onlineProfile)) {
  //         res.payload.additionalInfo.onlineProfile = [];
  //       }
  //       dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //       console.log("update profile ",res.payload);
  //       setShowOnlineProfileModal(false); // Close the modal after successful update
  //     }
  //   }).catch((error) => {
  //     console.error("Update failed:", error);
  //     // Optionally, inform the user of the failure
  //   });
  // }
  
  //update work sample
  
  const handleUpdateOnlineProfile = (values) => {
    // Ensure additionalInfo is an object and onlineProfile is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const onlineProfiles = Array.isArray(initialAdditionalInfo.onlineProfile) ? initialAdditionalInfo.onlineProfile : [];
    const userId=_id
    let updatedProfiles;
    if (currentEditingProfileId) {
      // Update existing profile
      updatedProfiles = onlineProfiles.map(profile =>
        profile._id === currentEditingProfileId ? { ...profile, ...values } : profile
      );
    } else {
      // Add new profile with a unique ID
      const newProfile = { ...values }; // Example: using current timestamp as a unique ID
      updatedProfiles = [...onlineProfiles, newProfile];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      onlineProfile: updatedProfiles,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        // Ensure onlineProfile in the response is also an array
        if (!Array.isArray(res.payload.additionalInfo.onlineProfile)) {
          res.payload.additionalInfo.onlineProfile = [];
        }
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        console.log("update profile ", res.payload);
        setShowOnlineProfileModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  
  
  
  const handleAddWorkSampleClick = () =>{
    setCurrentEditingWorkId(null);
    setShowWorkSampleModal(true)
  }
  
  const handleEditWorkSampleClick = (id) => {
    setCurrentEditingWorkId(id);
    setShowWorkSampleModal(true)
  }
  
  // const handleUpdateWorkSample =(values) =>{
    
  //     // Determine if we're adding a new profile or updating an existing one
  //     let updatedProfiles;
  //     if (currentEditingWorkId) {
  //       // Update existing profile
  //       updatedProfiles = additionalInfo?.workSamples.map(profile =>
  //         profile._id === currentEditingWorkId ? { ...profile, ...values } : profile
  //       );
  //     } else {
  //       // Add new profile with a unique ID
  //       const newProfile = { ...values }; // Assign a new ID for example
  //       updatedProfiles = [...additionalInfo?.workSamples, newProfile];
  //     }
    
  //     const updatedAdditionalInfo = {
  //       ...additionalInfo,
  //       workSamples: updatedProfiles,
  //     };
    
  //     // Dispatch the update action with the updated profiles array
  //     dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: _id })).then((res) => {
  //       if (res.payload) {
  //         dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //         setShowWorkSampleModal(false); // Close the modal after successful update
  //       }
  //     }).catch((error) => {
  //       console.error("Update failed:", error);
  //       // Optionally, inform the user of the failure
  //     });
  
  // }
  const handleUpdateWorkSample = (values) => {
    // Ensure additionalInfo is an object and workSamples is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const workSamples = Array.isArray(initialAdditionalInfo.workSamples) ? initialAdditionalInfo.workSamples : [];
    const userId=_id;
    let updatedProfiles;
    if (currentEditingWorkId) {
      // Update existing work sample
      updatedProfiles = workSamples.map(sample =>
        sample._id === currentEditingWorkId ? { ...sample, ...values } : sample
      );
    } else {
      // Add new work sample with a unique ID
      const newProfile = { ...values }; // Example: using current timestamp as a unique ID
      updatedProfiles = [...workSamples, newProfile];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      workSamples: updatedProfiles,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        setShowWorkSampleModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  


  const handleAddLanguageClick = () =>{
    setCurrentEditingLanguageId(null);
    setShowLanguagesModal(true)
  }
  
  const handleEditLanguageClick = (id) => {
    setCurrentEditingLanguageId(id);
    setShowLanguagesModal(true)
  }
  
  // const handleUpdateLanguage = (values) =>{
  
  //     let updatedProfiles;
  //     if (currentEditingLanguageId) {
  //       // Update existing profile
  //       updatedProfiles = additionalInfo?.languages.map(profile =>
  //         profile._id === currentEditingLanguageId ? { ...profile, ...values } : profile
  //       );
  //     } else {
  //       // Add new profile with a unique ID
  //       const newProfile = { ...values }; // Assign a new ID for example
  //       updatedProfiles = [...additionalInfo?.languages, newProfile];
  //     }
  
  //     const updatedAdditionalInfo = {
  //       ...additionalInfo,
  //       languages: updatedProfiles,
  //     };
  
  //     // Dispatch the update action with the updated profiles array
  //     dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id:_id })).then((res) => {
  //       if (res.payload) {
  //         dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //         setShowLanguagesModal(false); // Close the modal after successful update
  //       }
  //     }).catch((error) => {
  //       console.error("Update failed:", error);
  //       // Optionally, inform the user of the failure
  //     });
  
  // }

  const handleUpdateLanguage = (values) => {
    // Ensure additionalInfo is an object and languages is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const languages = Array.isArray(initialAdditionalInfo.languages) ? initialAdditionalInfo.languages : [];
    const userId=_id;
    let updatedLanguages;
    if (currentEditingLanguageId) {
      // Update existing language
      updatedLanguages = languages.map(language =>
        language._id === currentEditingLanguageId ? { ...language, ...values } : language
      );
    } else {
      // Add new language with a unique ID
      const newLanguage = { ...values }; // Example: using current timestamp as a unique ID
      updatedLanguages = [...languages, newLanguage];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      languages: updatedLanguages,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        setShowLanguagesModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  
  
  const handleAddCertificateClick = () =>{
    setCurrentEditingCertificateId(null);
    setShowCertificationModal(true)
  }
  
  const handleEditCertificateClick = (id) => {
    setCurrentEditingCertificateId(id);
    setShowCertificationModal(true)
  }
  
  // const handleUpdateCertificate = (values) =>{
  //  // Determine if we're adding a new profile or updating an existing one
  //  let updatedProfiles;
  //  if (currentEditingCertificateId) {
  //    // Update existing profile
  //    updatedProfiles = additionalInfo?.certifications.map(profile =>
  //      profile._id === currentEditingCertificateId ? { ...profile, ...values } : profile
  //    );
  //  } else {
  //    // Add new profile with a unique ID
  //    const newProfile = { ...values }; // Assign a new ID for example
  //    updatedProfiles = [...additionalInfo?.certifications, newProfile];
  //  }
  
  //  const updatedAdditionalInfo = {
  //    ...additionalInfo,
  //    certifications: updatedProfiles,
  //  };
  
  //  // Dispatch the update action with the updated profiles array
  //  dispatch(updateUser({ additionalInfo: updatedAdditionalInfo,  id: _id })).then((res) => {
  //    if (res.payload) {
  //      dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //      setShowCertificationModal(false); // Close the modal after successful update
  //    }
  //  }).catch((error) => {
  //    console.error("Update failed:", error);
  //    // Optionally, inform the user of the failure
  //  });
  
  // }
  /////////////////
  
  //update Research publication
  
  const handleUpdateCertificate = (values) => {
    // Ensure additionalInfo is an object and certifications is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const certifications = Array.isArray(initialAdditionalInfo.certifications) ? initialAdditionalInfo.certifications : [];
    const userId=_id;
    let updatedCertificates;
    if (currentEditingCertificateId) {
      // Update existing certificate
      updatedCertificates = certifications.map(certificate =>
        certificate._id === currentEditingCertificateId ? { ...certificate, ...values } : certificate
      );
    } else {
      // Add new certificate with a unique ID
      const newCertificate = { ...values}; // Example: using current timestamp as a unique ID
      updatedCertificates = [...certifications, newCertificate];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      certifications: updatedCertificates,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        setShowCertificationModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  
  
  const handleAddResearchClick = () =>{
    setCurrentEditingResearchId(null);
    setShowResearchModal(true)
  }
  
  const handleEditResearchClick = (id) => {
    setCurrentEditingResearchId(id);
    setShowResearchModal(true)
  }
  // const handleUpdateResearchPublication = (values) =>{
  //   // Determine if we're adding a new profile or updating an existing one
  //  let updatedProfiles;
  //  if (currentEditingResearchId) {
  //    // Update existing profile
  //    updatedProfiles = additionalInfo?.researchPublications.map(profile =>
  //      profile._id === currentEditingResearchId ? { ...profile, ...values } : profile
  //    );
  //  } else {
  //    // Add new profile with a unique ID
  //    const newProfile = { ...values }; // Assign a new ID for example
  //    updatedProfiles = [...additionalInfo.researchPublications, newProfile];
  //  }
  
  //  const updatedAdditionalInfo = {
  //    ...additionalInfo,
  //    researchPublications: updatedProfiles,
  //  };
  
  //  // Dispatch the update action with the updated profiles array
  //  dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: _id })).then((res) => {
  //    if (res.payload) {
  //      dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //      setShowResearchModal(false); // Close the modal after successful update
  //    }
  //  }).catch((error) => {
  //    console.error("Update failed:", error);
  //    // Optionally, inform the user of the failure
  //  });
  
  // }
  ///////////////////
  //update Patent data
  
  const handleUpdateResearchPublication = (values) => {
    // Ensure additionalInfo is an object and researchPublications is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const researchPublications = Array.isArray(initialAdditionalInfo.researchPublications) ? initialAdditionalInfo.researchPublications : [];
    const userId = _id;
    let updatedResearchPublications;
    if (currentEditingResearchId) {
      // Update existing research publication
      updatedResearchPublications = researchPublications.map(publication =>
        publication._id === currentEditingResearchId ? { ...publication, ...values } : publication
      );
    } else {
      // Add new research publication with a unique ID
      const newPublication = { ...values }; // Example: using current timestamp as a unique ID
      updatedResearchPublications = [...researchPublications, newPublication];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      researchPublications: updatedResearchPublications,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        setShowResearchModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  
  
  
  
  const handleAddPatentClick = () =>{
    setCurrentEditingPatentId(null);
    setShowPatentsModal(true)
  }
  
  const handleEditPantentClick = (id) => {
    
    setCurrentEditingPatentId(id);
    setShowPatentsModal(true)
  }
  // const handleUpdatePatent = (values) =>{
  //   let updatedProfiles;
  //   if (currentEditingPatentId) {
  //     // Update existing profile
  //     updatedProfiles = additionalInfo?.patents.map(profile =>
  //       profile._id === currentEditingPatentId ? { ...profile, ...values } : profile
  //     );
  //   } else {
  //     // Add new profile with a unique ID
  //     const newProfile = { ...values }; // Assign a new ID for example
  //     updatedProfiles = [...additionalInfo?.patents, newProfile];
  //   }
   
  //   const updatedAdditionalInfo = {
  //     ...additionalInfo,
  //     patents: updatedProfiles,
  //   };
   
  //   // Dispatch the update action with the updated profiles array
  //   dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: _id })).then((res) => {
  //     if (res.payload) {
  //       dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
  //       setShowPatentsModal(false); // Close the modal after successful update
  //     }
  //   }).catch((error) => {
  //     console.error("Update failed:", error);
  //     // Optionally, inform the user of the failure
  //   });
  // }

  const handleUpdatePatent = (values) => {
    // Ensure additionalInfo is an object and patents is initialized as an array
    const initialAdditionalInfo = additionalInfo || {}; // Initialize additionalInfo if undefined
    const patents = Array.isArray(initialAdditionalInfo.patents) ? initialAdditionalInfo.patents : [];
    const userId = _id;
    let updatedPatents;
    if (currentEditingPatentId) {
      // Update existing patent
      updatedPatents = patents.map(patent =>
        patent._id === currentEditingPatentId ? { ...patent, ...values } : patent
      );
    } else {
      // Add new patent with a unique ID
      const newPatent = { ...values }; // Example: using current timestamp as a unique ID
      updatedPatents = [...patents, newPatent];
    }
  
    const updatedAdditionalInfo = {
      ...initialAdditionalInfo,
      patents: updatedPatents,
    };
  
    // Dispatch the update action with the updated profiles array
    dispatch(updateUser({ additionalInfo: updatedAdditionalInfo, id: userId })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload)); // Assuming this updates the relevant part of the state
        setShowPatentsModal(false); // Close the modal after successful update
      }
    }).catch((error) => {
      console.error("Update failed:", error);
      // Optionally, inform the user of the failure
    });
  }
  
  return (
    <div>
        <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10 mb-6">
        <h2 className="text-start text-xl font-bold p-4">Accomplishments</h2>
        <hr className="border-t mx-4" />
          <div>
            <div>
                  <div className="flex justify-between p-4">
                    <div className="text-start">
                      <h2 className="text-gray-900 text-lg font-semibold">Online Profile</h2>
                      <p className="">Add link to online profiles (e.g. Linkedin, Facebook etc.).</p>
                    </div>
                    <button className="text-blue-700 font-semibold text-xl"
                    onClick={handleAddOnlineProfileClick}>Add</button>
                  
                  </div>
                  <div>
                      {
                        additionalInfo?.onlineProfile?.length > 0 && additionalInfo?.onlineProfile?.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-md font-semibold capitalize">{item.profileName}</p>
                                  <button onClick={() => handleEditOnlineProfileClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                              </div>
                                <p className="text-md font-semibold text-blue-600">{item.profileUrl}</p>
                                <p className="text-sm font-normal text-slate-500">{item.description}</p>
                              </div>
                        )})}
                  </div>
                  {showOnlineProfileModal && (
                    <EditOnlineProfileModel
                      onSave={handleUpdateOnlineProfile}
                      onClose={() => setShowOnlineProfileModal(false)}
                      initialData={currentEditingProfileId ? additionalInfo?.onlineProfile.find(profile => profile._id === currentEditingProfileId) : {}}
                    />
                  )}
            </div>
              <hr className="border-t mx-4" />
                  <div>
                    <div className="flex justify-between p-4">
                      <div className="text-start">
                        <h2 className="text-gray-900 text-lg font-semibold">Work sample</h2>
                        <p className="">Add link to your projects (e.g. Github links etc.).</p>
                      </div>
                      <button className="text-blue-700 font-semibold text-xl"
                      onClick={handleAddWorkSampleClick}>Add</button>
                  </div>
                  <div>
                      {
                        additionalInfo?.workSamples?.length > 0 && additionalInfo?.workSamples.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-md font-semibold capitalize">{item.workTitle}</p>
                                  <button onClick={() => handleEditWorkSampleClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                              </div>
                                <p className="text-md font-semibold text-blue-600">{item.workUrl}</p>
                                <div className="flex ">
                                    <p className="text-md font-normal text-slate-900 capitalize">{item.durationFromMonth}-{item.durationFromYear}</p>
                                    <p className="text-md font-normal text-slate-900 ml-4 capitalize">{item.currentProject ? "Working On": `${item.durationToMonth}-${item.durationToYear}`}</p>
                                </div>
                                <p className="text-sm font-normal text-slate-500">{item.description}</p>
                              </div>
                        )})}
                  </div>
                    {showWorkSampleModal && (
                    <EditWorkSampleModel
                      onSave={handleUpdateWorkSample}
                      onClose={() => setShowWorkSampleModal(false)}
                      initialData={currentEditingWorkId ? additionalInfo?.workSamples.find(profile => profile._id === currentEditingWorkId) : {}}
                    />
                  )}
              </div>


              <hr className="border-t mx-4" />
              <div>
                <div className="flex justify-between p-4">
                  <div className="text-start">
                    <h2 className="text-gray-900 text-lg font-semibold">Languages</h2>
                    <p className="">Add details of languages you have known.</p>
                  </div>
                  <button className="text-blue-700 font-semibold text-xl" 
                  onClick={handleAddLanguageClick}>Add</button>
                </div>
                <div>
                      {
                        additionalInfo?.languages?.length > 0 && additionalInfo?.languages.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-md font-normal italic">Language known- <span className="font-semibold capitalize">{item.language}</span></p>
                                  <button onClick={() => handleEditLanguageClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                              </div>
                                <p className="text-md font-normal italic text-slate-800">Proficiency - <span className="font-semibold capitalize">{item.proficiency}</span></p>
                              </div>
                        )})}
                  </div>
                {showLanguagesModal && (
                <EditLanguagesModel
                  onSave={handleUpdateLanguage}
                  onClose={() => setShowLanguagesModal(false)}
                  initialData={currentEditingLanguageId ? additionalInfo?.languages.find(profile => profile._id === currentEditingLanguageId) : {}}
                />
              )}
              </div>
              <hr className="border-t mx-4" />
              
              <div>
                  <div className="flex justify-between p-4">
                    <div className="text-start">
                      <h2 className="text-gray-900 text-lg font-semibold">Certification</h2>
                      <p className="">Add details of certifications you have achieved/completed</p>
                    </div>
                    <button className="text-blue-700 font-semibold text-xl" 
                    onClick={handleAddCertificateClick}>Add</button>
                  </div>
                  <div>
                      {
                        additionalInfo?.certifications?.length > 0 && additionalInfo?.certifications.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-lg capitalize">{item.certificateName}</p>
                                  <button onClick={() => handleEditCertificateClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                              </div>
                              <p className="text-sm italic font-normal text-slate-600">{item.certificateID}</p>
                              <p className="text-md font-normal text-blue-600 italic">{item.certificateUrl}</p>
                                <div className="flex ">
                                    <p className="text-md font-normal text-slate-900 capitalize">{item.certificateStartMonth}-{item.certificateStartYear}</p>
                                    <p className="text-md font-normal text-slate-900 ml-4 capitalize">{item.certificateNotExpire ? "Do Not Expire": `${item.certificateEndMonth}-${item.certificateEndYear}`}</p>
                                </div>
                              </div>
                        )})}
                  </div>
                {showCertificationModal && (
                <EditCertificationModel
                  onSave={handleUpdateCertificate}
                  onClose={() => setShowCertificationModal(false)}
                  initialData={currentEditingCertificateId ? additionalInfo?.certifications.find(profile => profile._id === currentEditingCertificateId) : {}}
                />
              )}
              </div>
              <hr className="border-t mx-4" />
              <div>
                  <div className="flex justify-between p-4">
                    <div className="text-start">
                      <h2 className="text-gray-900 text-lg font-semibold">Research Publication</h2>
                      <p className="">Add details of research publications you have filled.</p>
                    </div>
                    <button className="text-blue-700 font-semibold text-xl"
                    onClick={handleAddResearchClick}>Add</button>
                  </div>
                  <div>
                  {
                        additionalInfo?.researchPublications?.length > 0 && additionalInfo?.researchPublications.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-lg capitalize">{item.researchTitle}</p>
                                  <button onClick={() => handleEditResearchClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                                </div>
                                <p className="text-blue-700 italic">{item.researchUrl}</p>
                                <p className="italic text-sm">Published on <span className="text-md capitalize">{item.publishedMonth}-{item.publishedYear}</span></p>
                                <p className="text-sm font-normal text-slate-600">{item.description}</p>
                              </div>
                        )})}
                  </div>
                {showResearchModal && (
                <EditResearchModel
                  onSave={handleUpdateResearchPublication}
                  onClose={() => setShowResearchModal(false)}
                  initialData={currentEditingResearchId ? additionalInfo?.researchPublications.find(profile => profile._id === currentEditingResearchId) : {}}
                />
              )}
              </div>
              <hr className="border-t mx-4" />
              
              <div>
                  <div className="flex justify-between p-4">
                    <div className="text-start">
                      <h2 className="text-gray-900 text-lg font-semibold">Patent</h2>
                      <p className="">Add details of patent you have filled.</p>
                    </div>
                    <button className="text-blue-700 font-semibold text-xl"
                    onClick={handleAddPatentClick}>Add</button>
                  </div>
                  <div>
                  {
                        additionalInfo?.patents?.length > 0 && additionalInfo?.patents.map((item)=>{
                          return (
                              <div className="text-start mx-5 m-1 px-2 p-1"  key={item._id}>
                                <div className="flex ">
                                <p className="text-lg capitalize">{item.patentTitle}</p>
                                  <button onClick={() => handleEditPantentClick(item._id)}>
                                   <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                                 </button>
                                </div>
                                <p className="text-blue-700 italic">{item.patentUrl}</p>
                                <p className="italic text-sm text-slate-600">Application No. {item.applicationNo}</p>
                                <p className="italic text-sm text-slate-600">{!item.patentIssued ? "Patent Not Issued Yet" : `Issued on ${item.issueMonth}-${item.issueYear}` }</p>
                                <p className="italic text-sm text-slate-600">Pantent Office Location-<span className="capitalize">{item.patentOffice}</span></p>
                                <p className="text-sm font-normal text-slate-600">{item.description}</p>
                              </div>
                        )})}
                  </div>
                    {showPatentsModal && (
                    <EditPatentsModel
                      onSave={handleUpdatePatent}
                      onClose={() => setShowPatentsModal(false)}
                      initialData={currentEditingPatentId ? additionalInfo?.patents.find(profile => profile._id === currentEditingPatentId) : {}}
                    />
                  )}
              </div>
      
          </div>
      </div>
    </div>
  )
}

export default AccomplishmentComponent