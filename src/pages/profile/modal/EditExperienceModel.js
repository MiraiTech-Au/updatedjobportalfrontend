import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MultiSelectDropdown from '../../helpers';
import { edit } from '../../../assets/icons';

const EditExperienceModel = ({onClose,onSave,initialData}) => {
  const [shouldEditKeySkills,setShouldEditKeySkills] = useState(false)
    const formik = useFormik({
      initialValues: {
        currentEmployee: initialData?.currentEmployee ,
        employmentType: initialData?.employmentType || '',
        companyName: initialData?.companyName || '',
        designation: initialData?.designation || '',
        joiningYear: initialData?.joiningYear || '',
        joiningMonth: initialData?.joiningMonth || '',
        workedTillYear: initialData?.workedTillYear || '',
        workedTillMonth: initialData?.workedTillMonth || '',
        currentLocation: initialData?.currentLocation || '',
        skills: initialData?.skills || [], 
        jobDescription: initialData?.jobDescription || '',
      },
      validationSchema: Yup.object({
        employmentType: Yup.string().required('Required'),
        companyName: Yup.string().required('Required'),
        designation: Yup.string().required('Required'),
        joiningYear: Yup.string().required('Required'),
        joiningMonth: Yup.string().required('Required'),
        currentLocation: Yup.string().required('Required'),
        jobDescription: Yup.string().required('Required'),
      }),
      onSubmit: values => {
        // Submit form values
        let submissionValues = { ...values };

        // Check if patentIssued is false
        if (submissionValues.currentEmployee === true) {
          // Set issueMonth and issueYear to empty strings
          submissionValues = {
            ...submissionValues,
            workedTillYear: '',
            workedTillMonth: '',
          };
        }
        
        onSave(submissionValues);

      },
    });
    const handleSkillsSave = (selectedOptions) => {
      // Assuming selectedOptions is an array of { label, value } objects
      
      formik.setFieldValue('skills', selectedOptions);
      setShouldEditKeySkills(false)
    };
    const generateYearOptions = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear; year >= currentYear - 20; year--) {
        years.push(<option key={year} value={year}>{year}</option>);
      }
      return years;
    };
    
    // Helper function to generate month options
    const generateMonthOptions = () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months.map((month, index) => (
        <option key={index} value={month.toLowerCase()}>{month}</option>
      ));
    };
  return (
    <div>
        <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 h-[90vh] overflow-y-scroll no-scrollbar">
      <form  onSubmit={formik.handleSubmit}>
            <h2 className="text-start text-xl font-bold">
              Add Employment
            </h2>
            <hr className="border-t my-4" />

                 {/* Current employee or not */}
                 <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Is this your current employment? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="currentEmployee"
                    value="true"
                    checked={formik.values.currentEmployee === true}
                    onChange={() => formik.setFieldValue("currentEmployee", true)}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center md:ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="currentEmployee"
                    value="false"
                    checked={formik.values.currentEmployee === false}
                    onChange={() => formik.setFieldValue("currentEmployee", false)}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

{/* Employment type */}
<div className="mt-4">
  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
    Employment type <span className="text-red-500">*</span>
  </label>
  <div className="mt-4">
    <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center ">
      <label className="inline-flex md:items-center">
        <input
          type="radio"
          className="form-radio"
          name="employmentType"
          value="full-time"
          checked={formik.values.employmentType === "full-time"}
          onChange={formik.handleChange}
        />
        <span className="ml-2">Full-Time</span>
      </label>
      <label className="inline-flex md:items-center md:ml-6">
        <input
          type="radio"
          className="form-radio"
          name="employmentType"
          value="internship"
          checked={formik.values.employmentType === "internship"}
          onChange={formik.handleChange}
        />
        <span className="ml-2">Internship</span>
      </label>
      <label className="inline-flex md:items-center md:ml-6">
        <input
          type="radio"
          className="form-radio"
          name="employmentType"
          value="contract"
          checked={formik.values.employmentType === "contract"}
          onChange={formik.handleChange}
        />
        <span className="ml-2">Contract</span>
      </label>
    </div>
  </div>
</div>

            
            {/* Current Company Name */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Current Company Name <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Enter Your Company Name"
                {...formik.getFieldProps('companyName')}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <div className="text-red-500 text-xs">{formik.errors.companyName}</div>
              ) : null}
            </div>

            {/* Designation field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Current Designation <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="designation"
                name="designation"
                type="text"
                placeholder="Enter Your Designation"
                {...formik.getFieldProps("designation")}
              />
              <p className='text-sm text-slate-600 mt-2 text-start'>Examples: Computer science, biology, patient care</p>
              {formik.touched.designation && formik.errors.designation ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.designation}
                </div>
              ) : null}
            </div>

               {/* Joining date */}
               <div className="my-4">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Joining date <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <select
                  name="joiningYear"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps("joiningYear")}
                >
                  <option value="">Select Year</option>
                  {generateYearOptions()}
                </select>

                <select
                  name="joiningMonth"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps("joiningMonth")}
                >
                  <option value="">Select Month</option>
                  {generateMonthOptions()}
                </select>
              </div>
            </div>

            {/* Conditionally render "Worked till" fields */}
            {formik.values.currentEmployee === false  && (
              <div className="my-4">
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Worked till <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <select
                    name="workedTillYear"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps("workedTillYear")}
                  >
                    <option value="">Select Year</option>
                    {generateYearOptions()}
                  </select>

                  <select
                    name="workedTillMonth"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps("workedTillMonth")}
                  >
                    <option value="">Select Month</option>
                    {generateMonthOptions()}
                  </select>
                </div>
              </div>
            )}
            
     
            {/* Current Location field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Current Location <span className="text-red-500">*</span>
              </label>
              <select
                name="currentLocation"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("currentLocation")}
              >
                <option value="">Select Location</option>
                <option value="delhi">Delhi</option>
                <option value="gurugram">Gurugram</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.currentLocation &&
              formik.errors.currentLocation ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.currentLocation}
                </div>
              ) : null}
            </div>

            <div className='mt-4'>
  <label className="block text-gray-700 text-start text-sm font-bold mb-2">
    Skills <span className="text-red-500">*</span>
  </label>
  {
    !shouldEditKeySkills && formik.values.skills && formik.values.skills.length > 0 ? ( // Corrected formik.value.skills to formik.values.skills and checked length
      <div className="flex justify-between items-center"> {/* Adjusted flex container for proper alignment */}
        <div className="text-start ml-2">
          {formik.values.skills.map((each, index) => ( // Added key to map function for React elements
            <span key={index}>{each.label}{index < formik.values.skills.length - 1 ? ', ' : ''}</span> // Added commas between skills
          ))}
        </div>
        <button // Using a button for accessibility
            className="ml-4"
            onClick={() => setShouldEditKeySkills(true)}>
            <img
              className="w-4 h-4 cursor-pointer"
              src={edit} // Make sure this points to the correct image URL
              alt="Edit Icon"
            />
          </button>
      </div>
    ) : (
      <MultiSelectDropdown
        onSave={handleSkillsSave} 
        onClose={() => setShouldEditKeySkills(false)} // This function should toggle the state to hide the MultiSelectDropdown
        selectedValues={formik.values.skills}
      />
    )
  }
</div>


            <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Job Description / Achievements <span className="text-red-500">*</span>
              </label>
                <textarea
                    name="jobDescription"
                    {...formik.getFieldProps('jobDescription')}
                    placeholder="Describe yourself"
                    className="w-full p-2 border border-gray-300 rounded-lg h-32 resize-none"
                />    
            </div>


            <div className="flex justify-end space-x-4 mt-8">
              <button
                onClick={onClose}
                className="px-6 py-2 border rounded-xl text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out"
              >
                Save
              </button>
            </div>
          </form>
        
            </div>
        </div>
  </div>
  )
}

export default EditExperienceModel