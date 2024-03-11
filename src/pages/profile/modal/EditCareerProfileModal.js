import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
const EditCareerProfileModal = ({initialData,onClose,onSave}) => {
      // Initialize Formik
      const formik = useFormik({
        initialValues: {
            preferredRoleType: initialData.preferredRoleType || '',
            workingArrangements: initialData.workingArrangements || '',
          roleName: initialData.roleName || '',
          roleCategory: initialData.roleCategory || '',
          currentNoticePeriod: initialData.currentNoticePeriod || '',
          currentSalary: initialData.currentSalary || '',
          expectedSalary: initialData.expectedSalary || '',
          currentLocation: initialData.currentLocation || '',
          preferredLocation: initialData.preferredLocation || '',
        },
        validationSchema: Yup.object({
            preferredRoleType: Yup.string().required('Required'),
            workingArrangements: Yup.string().required('Required'),
            roleName: Yup.string().required('Required'),
            roleCategory: Yup.string().required('Required'),
            currentNoticePeriod: Yup.string().required('Required'),
            currentSalary: Yup.number().min(0, 'Must be greater than or equal to 0'),
            expectedSalary: Yup.number().min(0, 'Must be greater than or equal to 0'),
            currentLocation: Yup.string().required('Required'),
            preferredLocation: Yup.string().required('Required'),
          }),
        onSubmit: (values) => {
          console.log(values);
          onSave(values)
          // Here you would usually send the data to the server
        },
      });



  return (
    <div>
        <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 h-[90vh] overflow-y-scroll no-scrollbar">
      <form onSubmit={formik.handleSubmit}>
            <h2 className="text-start text-xl font-bold">
              Add Career Profile
            </h2>
            <hr className="border-t my-4" />

  {/* Preferred Role Type */}
<div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
        Preferred Role Type <span className="text-red-500">*</span>
    </label>
    <div className="mt-4">
        <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center ">
            <label className="inline-flex md:items-center">
                <input
                type="radio"
                className="form-radio"
                name="preferredRoleType"
                value="full-time"
                checked={formik.values.preferredRoleType === "full-time"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">Full-Time</span>
            </label>
            <label className="inline-flex md:items-center md:ml-6">
                <input
                type="radio"
                className="form-radio"
                name="preferredRoleType"
                value="part-time"
                checked={formik.values.preferredRoleType === "part-time"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">Part-Time</span>
            </label>
            <label className="inline-flex md:items-center md:ml-6">
                <input
                type="radio"
                className="form-radio"
                name="preferredRoleType"
                value="contract"
                checked={formik.values.preferredRoleType === "contract"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">Contract</span>
            </label>
        </div>
        {formik.touched.preferredRoleType && formik.errors.preferredRoleType ? (
            <div className="text-red-500 text-md">{formik.errors.preferredRoleType}</div>
        ) : null}
    </div>
</div>

{/* Working Arrangements */}
<div className="mt-4">
    <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
        Working Arrangements <span className="text-red-500">*</span>
    </label>
    <div className="mt-4">
        <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center ">
            <label className="inline-flex md:items-center">
                <input
                type="radio"
                className="form-radio"
                name="workingArrangements"
                value="remote"
                checked={formik.values.workingArrangements === "remote"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">Remote</span>
            </label>
            <label className="inline-flex md:items-center md:ml-6">
                <input
                type="radio"
                className="form-radio"
                name="workingArrangements"
                value="hybrid"
                checked={formik.values.workingArrangements === "hybrid"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">Hybrid</span>
            </label>
            <label className="inline-flex md:items-center md:ml-6">
                <input
                type="radio"
                className="form-radio"
                name="workingArrangements"
                value="in-office"
                checked={formik.values.workingArrangements === "in-office"}
                onChange={formik.handleChange}
                />
                <span className="ml-2">In-Office</span>
            </label>
        </div>
        {formik.touched.workingArrangements && formik.errors.workingArrangements ? (
            <div className="text-red-500 text-md">{formik.errors.workingArrangements}</div>
        ) : null}
    </div>
</div>


        {/* Role name field */}
        <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Role Name <span className="text-red-500">*</span>
              </label>
              <select
                name="roleName"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("roleName")}
              >
                <option value="">Select role name</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Data Engineer">Data Engineer</option>
                <option value="Devops Engineer">DevOps Engineer</option>
                
              </select>
              {formik.touched.roleName && formik.errors.roleName ? (
                          <div className="text-red-500 text-md">{formik.errors.roleName}</div>
                        ) : null}
            </div>

        {/* Role Category */}
        <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Role Category <span className="text-red-500">*</span>
              </label>
              <select
                name="roleCategory"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("roleCategory")}
              >
                <option value="">Select role category</option>
                <option value="software Development">Software Development</option>
                <option value="Quality Assurance and Testing">Quality Assurance and Testing</option>
                <option value="Devops">DevOps</option>
                <option value="DBA/Data warehousing">DBA/Data warehousing</option>
                </select>
              {formik.touched.roleCategory && formik.errors.roleCategory ? (
                          <div className="text-red-500 text-md">{formik.errors.roleCategory}</div>
                        ) : null}
            </div>

        {/* Current Notice Period */}
        <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Current Notice Period <span className="text-red-500">*</span>
              </label>
              <select
                name="noticePeriod"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("currentNoticePeriod")}
              >
                <option value="">Select notice period</option>
                <option value="3 months">3 months</option>
                <option value="2 months">2 months</option>
                <option value="In 1 month">In 1 month</option>
                <option value="Immediately">Immediately</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.currentNoticePeriod && formik.errors.currentNoticePeriod ? (
                    <div className="text-red-500 text-md">{formik.errors.currentNoticePeriod}</div>
                ) : null}
            </div>

            {/* Salary */}
            <div className='grid grid-cols-2 gap-4'>
        {/* Current Salary */}
        <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Current Salary 
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currentSalary"
                name="currentSalary"
                type="number"
                placeholder="Enter Your Current Salary"
                {...formik.getFieldProps('currentSalary')}
              />
              {formik.touched.currentSalary && formik.errors.currentSalary ? (
                <div className="text-red-500 text-xs">{formik.errors.currentSalary}</div>
              ) : null}
            </div>
        {/* Expected Salary */}
        <div className="mt-4">
             <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Expected Salary 
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expectedSalary"
                name="expectedSalary"
                type="number"
                placeholder="Enter Your Expected Salary"
                {...formik.getFieldProps('expectedSalary')}
              />
               {formik.touched.expectedSalary && formik.errors.expectedSalary ? (
                <div className="text-red-500 text-xs">{formik.errors.expectedSalary}</div>
              ) : null}
            </div>

            </div>

            {/* location */}
            <div className='grid grid-cols-2 gap-4 '>
        {/* Current location */}
        <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Current Location 
              </label>
              <select
                name="currentLocation"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("currentLocation")}
              >
                <option value="">Select current location</option>
                <option value="delhi">Delhi</option>
                <option value="nashik">Nashik</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.currentLocation && formik.errors.currentLocation ? (
                          <div className="text-red-500 text-md">{formik.errors.currentLocation}</div>
                        ) : null}
            </div>
        {/* Expected Salary */}
        <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Expected Location 
              </label>
              <select
                name="preferredLocation"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("preferredLocation")}
              >
                <option value="">Select expected location</option>
                <option value="delhi">Delhi</option>
                <option value="nashik">Nashik</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.preferredLocation && formik.errors.preferredLocation ? (
                          <div className="text-red-500 text-md">{formik.errors.preferredLocation}</div>
                        ) : null}
            </div>

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

export default EditCareerProfileModal