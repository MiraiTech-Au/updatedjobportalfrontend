import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditPatentsModel = ({onSave, onClose, initialData}) => {

   // Formik initialization and validation schema
   const formik = useFormik({
    initialValues: {
      patentTitle: initialData.patentTitle || '',
      patentUrl: initialData.patentUrl || '',
      patentOffice: initialData.patentOffice || '',
      applicationNo: initialData.applicationNo || '',
      patentIssued:initialData.patentIssued || false,
      // Add initial values for issueYear and issueMonth if needed
      issueYear: initialData.issueYear || '',
      issueMonth: initialData.issueMonth || '',
      description: initialData.description || '',
    },
    validationSchema: Yup.object({
      patentTitle: Yup.string().required('Patent title is required'),
      patentUrl: Yup.string().url('Invalid URL').nullable(),
      patentOffice: Yup.string().required('Patent office is required'),
      applicationNo: Yup.string().required('Application number is required'),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      // Handle form submission
      let submissionValues = { ...values };

      // Check if patentIssued is false
      if (!submissionValues.patentIssued) {
        // Set issueMonth and issueYear to empty strings
        submissionValues = {
          ...submissionValues,
          issueMonth: '',
          issueYear: '',
        };
      }
      onSave(submissionValues);
      // You might want to call an API or handle the data further here
    },
  });

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
    <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="modal-content bg-white p-6 h-[90vh] rounded-2xl shadow-lg w-full md:w-1/2  overflow-y-scroll no-scrollbar">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-start text-xl font-bold">
        Patent
            </h2>
            <p className='text-start text-sm text-gray-600 mb-4'>Add details of patents you have filed.</p>
            <hr className="border-t my-4" />
            
            {/* Patent title */}
            <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Patent title <span className="text-red-500">*</span>
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="patentTitle"
                      type="text"
                      placeholder="Enter Patent Title"
                      {...formik.getFieldProps("patentTitle")}
                  />
                  {formik.touched.patentTitle && formik.errors.patentTitle ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.patentTitle}
                      </div>
                  ) : null}
                  </div>

                      {/* Patent URL */}
          <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  URL
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="patentUrl"
                      type="text"
                      placeholder="Enter patent URL here"
                      {...formik.getFieldProps("patentUrl")}
                  />
                  {formik.touched.patentUrl && formik.errors.patentUrl ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.patentUrl}
                      </div>
                  ) : null}
                  </div>


        {/* Patent Office */}
          <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Patent Office
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="patentOffice"
                      type="text"
                      placeholder="Enter patent office"
                      {...formik.getFieldProps("patentOffice")}
                  />
                  {formik.touched.patentOffice && formik.errors.patentOffice ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.patentOffice}
                      </div>
                  ) : null}
                  </div>

         {/* Radio buttons for Patent issued or pending */}
            <div className="mt-4">
              <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center ">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="patentIssued"
                    value="true"
                    checked={formik.values.patentIssued === true}
                    onChange={() => formik.setFieldValue("patentIssued", true)}
                  />
                  <span className="ml-2">Patent issued</span>
                </label>
                <label className="inline-flex items-center md:ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="patentIssued"
                    value="false"
                    checked={formik.values.patentIssued === false}
                    onChange={() => formik.setFieldValue("patentIssued", false)}
                  />
                  <span className="ml-2">Patent pending</span>
                </label>
              </div>
            </div>



                  {/* Application number */}
          <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Application number
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="applicationNo"
                      type="text"
                      placeholder="Enter patent office"
                      {...formik.getFieldProps("applicationNo")}
                  />
                  {formik.touched.applicationNo && formik.errors.applicationNo ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.applicationNo}
                      </div>
                  ) : null}
                  </div>

            {/* Conditionally render issue date fields */}
         {/* Conditionally render issue date fields */}
{formik.values.patentIssued && (
  <div className="my-4">
    <label className="block text-start text-gray-700 text-sm font-bold mb-2">
      Issue date
    </label>
    <div className="flex gap-4">
      <select
        name="issueYear"
        className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        {...formik.getFieldProps("issueYear")}
      >
        <option value="">Select year</option>
        {/* Generate year options dynamically */}
        {generateYearOptions()}
      </select>
      <select
        name="issueMonth"
        className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        {...formik.getFieldProps("issueMonth")}
      >
        <option value="">Select month</option>
        {/* Generate month options dynamically */}
        {generateMonthOptions()}
      </select>
    </div>
  </div>
)}


            {/* description */}
            <div className="mt-4">
            <label className="block text-gray-700 text-start text-sm font-bold mb-2">
              Description 
            </label>
              <textarea
                  name="description"
                  {...formik.getFieldProps('description')}
                  placeholder="Type here..."
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
  )
}

export default EditPatentsModel