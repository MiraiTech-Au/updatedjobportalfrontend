import React, { useState } from 'react'
import { achivement, edit } from '../../../assets/icons';
import EditExperienceModal from '../modal/EditExperienceModel';
import { useDispatch } from 'react-redux';
import { setFetchedData } from '../.'; // Adjust import path as necessary
import {updateUser} from "../profile.action"
const ExperienceComponent = ({employmentHistory,_id}) => {
    const dispatch = useDispatch()
    const [showEditExperienceModal, setShowEditExperienceModal] = useState(false);
    const [currentEditingExperienceId, setCurrentEditingExperienceId] = useState(null);
  
//Update Experience

const handleEditExperienceClick = (id) => {
    setCurrentEditingExperienceId(id);
    setShowEditExperienceModal(true);
  };
  
  const handleAddExperienceClick = () => {
    setCurrentEditingExperienceId(null);
    setShowEditExperienceModal(true);
  };
  
  const handleUpdateExperience = (values) =>{
    let updatedExperiences;
    if (currentEditingExperienceId) {
      updatedExperiences = employmentHistory.map((item) =>
        item._id === currentEditingExperienceId ? { ...item, ...values, _id: currentEditingExperienceId } : item
      );
    } else {
      const newExperience = { ...values};
      updatedExperiences = [...employmentHistory, newExperience];
    }
  
    dispatch(updateUser({ employmentHistory: updatedExperiences, id: _id })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload));
        setShowEditExperienceModal(false);
      }
    });
  }
  
  
  ////////////////////
    return (
    <div>

<div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10">
        <h2 className="text-start text-xl font-bold p-4">
          My Experience and Achievements
        </h2>
        <hr className="border-t mx-4" />
        {
          employmentHistory && employmentHistory.length > 0 ? (
            <div>
            {            
            employmentHistory?.map((item)=>{
              return (
                  <div className='mx-4 mt-3 border p-4 rounded-md shadow-md' key={item._id}>
                      <div className="text-start">
                        <div className="flex ">
                          <p className="text-md font-semibold text-blue-700 capitalize">{item.designation}</p>
                          <button onClick={() => handleEditExperienceClick(item._id)}>
                            <img className="ml-4 w-4 h-4 mt-1" src={edit} alt="Edit Icon" />
                          </button>
                        </div>
                        <p className="capitalize">{item.companyName} | {item.currentLocation}</p>
                        <p className="capitalize">{item.employmentType} | {item.joiningMonth} {item.joiningYear} to {item.currentEmployee ? "Present" : `${item.workedTillMonth} ${item.workedTillYear}`}</p>
                        <p className="text-md italic text-slate-700">Skills used {item.skills.length>0 && item.skills.map((skill,key)=>(
                          <span className="capitalize font-semibold" key={item._id}>{skill.value}, </span>
                          ))}.</p>
                          <p className="text-sm text-slate-600">{item.jobDescription}</p>
                      </div>
                  </div>
              )
          })
        }
      <div className="flex justify-start ml-6 items-center py-6">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start" 
          onClick={handleAddExperienceClick}>
            Add Experience
          </button>
        </div>
        </div>
          ) : (
        <div>
            <div className="flex items-center justify-center p-4">
              <img src={achivement} alt="About me" className="h-32 w-32" />
            </div>
            <h3 className="font-bold text-xl text-center p-4">
              Add experience and achievement detail.
            </h3>
            <p className="text-center px-4">
              Your experience and achievement steps are required! That way employers
              will find you in our CV database.
            </p>
            <div className="flex justify-center items-center py-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl min-w-[10rem] max-w-xs" onClick={handleAddExperienceClick}>
                Fill In Now
              </button>
              
              </div>
        </div>

          )
        }
          {showEditExperienceModal && (
                <EditExperienceModal
                  onSave={handleUpdateExperience}
                  onClose={() => setShowEditExperienceModal(false)}
                  initialData={currentEditingExperienceId ? employmentHistory.find(item => item._id === currentEditingExperienceId) : null}
                />
              )}
      </div>
    </div>
  )
}

export default ExperienceComponent