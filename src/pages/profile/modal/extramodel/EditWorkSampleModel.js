import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditWorkSampleModel = ({onClose, onSave, initialData}) => {
  const formik = useFormik({
    initialValues: {
      workTitle: initialData?.workTitle || '',
      workUrl: initialData?.workUrl || '',
      durationFromYear: initialData?.durationFromYear || '',
      durationFromMonth: initialData?.durationFromMonth || '',
      durationToYear: initialData?.durationToYear || '',
      durationToMonth: initialData?.durationToMonth || '',
      currentProject: initialData?.currentProject || false,
      description: initialData?.description || '',
    },
    validationSchema: Yup.object({
      workTitle: Yup.string().required('Work title is required'),
      workUrl: Yup.string().url('Invalid URL').required('Profile URL is required'),
      durationFromYear: Yup.string().required('Start year is required'),
      durationFromMonth: Yup.string().required('Start month is required'),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      let submissionValues = { ...values };

  // Check if currentProject is true
  if (submissionValues.currentProject) {
    // Set durationToYear and durationToMonth to empty strings
    submissionValues = {
      ...submissionValues,
      durationToYear: '',
      durationToMonth: '',
    };
  }
      onSave(submissionValues); // Assuming onSave is a function passed as a prop for handling form submission.
    },
  });

// Correct implementation for the checkbox change handler
const handleCheckboxChange = (e) => {
  const { checked } = e.target;
  formik.setFieldValue('currentProject', checked);
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
    <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 h-[90vh] overflow-y-scroll no-scrollbar">
    <form onSubmit={formik.handleSubmit}>
    <h2 className="text-start text-xl font-bold">
            Work Samples
          </h2>
          <p className='text-start text-sm text-gray-600 mb-4'>Add links to your projects (e.g. Github links, etc.).</p>
          <hr className="border-t my-4" />

  {/* Current Company Name */}
  <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Work title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="workTitle"
                    type="text"
                    placeholder="Enter Work Title"
                    {...formik.getFieldProps('workTitle')}
                  />
                  {/* Display validation error for workTitle */}
                  {formik.touched.workTitle && formik.errors.workTitle && (
                    <div className="text-red-500 text-xs">{formik.errors.workTitle}</div>
                  )}
                  </div>

                      {/* Social Profile URL */}
                      <div className="mt-4">
                        <label htmlFor="workUrl" className="block text-gray-700 text-sm font-bold mb-2 text-start">
                          URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="workUrl"
                          type="text"
                          placeholder="Enter Social Profile URL"
                          {...formik.getFieldProps('workUrl')}
                        />
                        {formik.touched.workUrl && formik.errors.workUrl && (
                          <div className="text-red-500 text-xs">{formik.errors.workUrl}</div>
                        )}
                      </div>

         

            {/* Duration from - Year and Month Selects */}
            <div className="my-4">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Duration from
              </label>
              <div className="flex gap-4">
                <select
                  name="durationFromYear"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('durationFromYear')}
                >
                  <option value="">Select Year</option>
                  {generateYearOptions()}
                </select>

                <select
                  name="durationFromMonth"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('durationFromMonth')}
                >
                  <option value="">Select Month</option>
                  {generateMonthOptions()}
                </select>
              </div>
              {formik.touched.durationFromYear && formik.errors.durationFromYear && (
                <div className="text-red-500 text-xs">{formik.errors.durationFromYear}</div>
              )}
              {formik.touched.durationFromMonth && formik.errors.durationFromMonth && (
                <div className="text-red-500 text-xs">{formik.errors.durationFromMonth}</div>
              )}
            </div>

            {/* Duration to - Year and Month Selects, conditional rendering based on 'currentProject' */}
            {!formik.values.currentProject && (
              <div className="my-4">
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Duration to
                </label>
                <div className="flex gap-4">
                  <select
                    name="durationToYear"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps('durationToYear')}
                  >
                    <option value="">Select Year</option>
                    {generateYearOptions()}
                  </select>

                  <select
                    name="durationToMonth"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps('durationToMonth')}
                  >
                    <option value="">Select Month</option>
                    {generateMonthOptions()}
                  </select>
                </div>
                {formik.touched.durationToYear && formik.errors.durationToYear && (
                  <div className="text-red-500 text-xs">{formik.errors.durationToYear}</div>
                )}
                {formik.touched.durationToMonth && formik.errors.durationToMonth && (
                  <div className="text-red-500 text-xs">{formik.errors.durationToMonth}</div>
                )}
              </div>
            )}

        {/* Checkbox for "I am currently working on this" */}
        <div className='flex justify-start items-center'>
          <input
            type="checkbox"
            className="mx-3"
            id="currentProject"
            name="currentProject"
            onChange={handleCheckboxChange} // Updated to use the custom handler
            checked={formik.values.currentProject}
          />
          <label htmlFor="currentProject" className="text-md text-gray-600">
            I am currently working on this
          </label>
        </div>

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

export default EditWorkSampleModel