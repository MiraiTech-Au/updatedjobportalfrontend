import React, {  useState } from 'react'
import { careerProfile, edit } from "../../../assets/icons";
import EditCareerProfileModal from '../modal/EditCareerProfileModal';
import { useDispatch } from 'react-redux';
import { setFetchedData } from '../.'; // Adjust import path as necessary
import {updateUser} from "../profile.action"

const CareerProfileComponent = ({professionalInfo, _id}) => {
  const dispatch = useDispatch();
  const [showEditCareerProfileModal, setShowEditCareerProfileModal] = useState(false)  
  


const handleAddCareerProfileClick = () => {
  setShowEditCareerProfileModal(true);
};

const handleUpdateCareerProfile = (values) =>{
 

  dispatch(updateUser({ professionalInfo: {...values}, id: _id })).then((res) => {
    if (res.payload) {
      dispatch(setFetchedData(res.payload));
      setShowEditCareerProfileModal(false);
    }
  }).catch((err)=>{
    console.log("carrer",err);
  })
}



  return (
    <div>
        <div className="border rounded-3xl shadow-lg flex flex-col p-4 w-full mt-10">
        <h2 className="text-start text-xl font-bold p-4">Career Profile</h2>
        <hr className="border-t mx-4" />
        { professionalInfo._id ? (
            <div className='grid grid-cols-1 md:grid-cols-2  m-6 px-4 p-2  border rounded-lg shadow-lg relative mt-2'>
              <div className='text-start'>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Job role</p>
                  <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.roleName}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Desired Employment Type</p>
                  <p className='text-blue-800 font-semi-bold text-md capitalize'>{professionalInfo.workingArrangements}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Current Salary</p>
                  <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.currentSalary}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Current Location</p>
                  <p className='text-blue-800 font-semi-bold text-md capitalize'>{professionalInfo.currentLocation}</p>
                </div>
                
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Current Notice Period</p>
                  <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.currentNoticePeriod}</p>
                </div>
                
                
              </div>
              <div className='absolute top-4 right-10'>
              <button onClick={handleAddCareerProfileClick}>
                        <img className="ml-4 w-5 h-5" src={edit} alt="Edit Icon" />
              </button>
              </div>
              <div className='text-start'>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Desired Role Type</p>
                <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.preferredRoleType}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Role Category</p>
                   <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.roleCategory}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Expected Salary</p>
                  <p className='text-blue-800 font-semi-bold text-md'>{professionalInfo.expectedSalary}</p>
                </div>
                <div className='p-2 m-1'>
                  <p className='text-slate-800 font-semibold text-md'>Preferred Location</p>
                  <p className='text-blue-800 font-semi-bold text-md capitalize'>{professionalInfo.preferredLocation}</p>
                </div>

              </div>

            {/* <div className="p-4">
              <h3 className="font-bold text-md text-start py-2">
              Professional interests
              </h3>
              <h3 className="text-start py-2">
              Please choose which professional areas you are interested in.
              </h3>
              <div className="flex justify-start py-2">
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start">
                  Add areas
                </button>
              </div>
              <hr className="border-t mt-4" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-md text-start py-2">
                Desired place to work
              </h3>
              <h3 className="text-start py-2">
                Where would you preferably like to work?
              </h3>
              <div className="flex justify-start py-2">
                <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-3xl min-w-[10rem] max-w-xs justify-start items-start">
                  Add work region
                </button>
              </div>
              <hr className="border-t mt-4" />
            </div> */}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center p-4">
              <img src={careerProfile} alt="About me" className="h-32 w-32" />
            </div>
            <h3 className="font-bold text-xl text-center p-4">My strengths</h3>
            <p className="text-center px-4">
              Your professional and school steps are required! That way emloyer
              will find you in our CV database. By informing us about your
              qualifications and know-how, you help us to provide you with more
              personalized job offers.
            </p>
            <div className="flex justify-center items-center py-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl min-w-[10rem] max-w-xs"
                onClick={handleAddCareerProfileClick}
              >
                Fill In Now
              </button>
            </div>
          </>
        )}
           {showEditCareerProfileModal && (
                <EditCareerProfileModal
                  onSave={handleUpdateCareerProfile}
                  onClose={() => setShowEditCareerProfileModal(false)}
                  initialData={professionalInfo}
                />
              )}
      </div>
    </div>
  )
}

export default CareerProfileComponent