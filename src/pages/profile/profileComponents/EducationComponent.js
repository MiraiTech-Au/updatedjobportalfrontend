import React, { useState } from 'react'
import { achivement, edit } from '../../../assets/icons'
import EditEducationModal from '../modal/EditEducationModel';
import { useDispatch } from 'react-redux';
import { setFetchedData } from '../.'; // Adjust import path as necessary
import {updateUser} from "../profile.action"
const EducationComponent = ({qualifications, _id}) => {
    const dispatch = useDispatch()
    const [currentEditingId, setCurrentEditingId] = useState(null); 
    const [showEditEducationModal, setShowEditEducationModal] = useState(false);
 
    //Update Education
  const handleEditClick = (id) => {
    setCurrentEditingId(id);
    setShowEditEducationModal(true);
  };

  const handleAddNewClick = () => {
    setCurrentEditingId(null);
    setShowEditEducationModal(true);
  };

  const handleUpdateEducation = (values) =>{
      let updatedQualifications;
    if (currentEditingId) {
      updatedQualifications = qualifications.map((item) =>
        item._id === currentEditingId ? { ...item, ...values, _id: currentEditingId } : item
      );
    } else {
      const newQualification = { ...values};
      updatedQualifications = [...qualifications, newQualification];
    }

    dispatch(updateUser({ qualifications: updatedQualifications, id: _id })).then((res) => {
      if (res.payload) {
        dispatch(setFetchedData(res.payload));
        setShowEditEducationModal(false);
      }
    });
  }
//////////////////
  return (
    <div>    <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10">
    <h2 className="text-start text-xl font-bold p-4">
      My Education
    </h2>
    <hr className="border-t mx-4" />
      {
      qualifications && qualifications.length > 0 ? ( 
    <div>
    {
       qualifications?.map((item)=>{
          return (
              <div className='mx-4 mt-3 border p-4 rounded-md shadow-md' key={item._id}>
                  <div className="text-start">
                    <div className="flex ">
                      <p className="text-md font-semibold text-blue-800">{item.education}</p>
                      <button onClick={() => handleEditClick(item._id)}>
                        <img className="ml-4 w-4 h-4" src={edit} alt="Edit Icon" />
                      </button>
                    </div>
                    <p className="text-md capitalize">{item.course}  {item.specialization} </p>
               
                    <p className=" capitalize">{item.instituteName} | {item.location}</p>
                    <p className="text-normal font-light capitalize">{item.startYear}-{item.endYear} | {item.courseType} </p>
                  </div>
              </div>
          )
      })
    }

  <div className="flex justify-start ml-6 items-center py-6">
      <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-1 md:px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start" 
      onClick={handleAddNewClick}>
        Add Education
      </button>
    </div>
    </div>)
    :(
     <div>
        <div className="flex items-center justify-center p-4">
          <img src={achivement} alt="About me" className="h-32 w-32" />
        </div>
        <h3 className="font-bold text-xl text-center p-4">
          Add education 
        </h3>
        <p className="text-center px-4">
          Your education and achievement steps are required! That way employers
          will find you in our CV database.
        </p>
        <div className="flex justify-center items-center py-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl min-w-[10rem] max-w-xs" 
          onClick={handleAddNewClick}>
            Fill In Now
          </button>
        
        </div>
    </div>
)}
{showEditEducationModal && (
            <EditEducationModal
            onSave={handleUpdateEducation}
            onClose={() => setShowEditEducationModal(false)}
            initialData={currentEditingId ? qualifications.find(item => item._id === currentEditingId) : null}
            />
            )}
  </div>
</div>
  )
}

export default EducationComponent