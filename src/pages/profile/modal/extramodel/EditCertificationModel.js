import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditCertificationModel = ({onSave, onClose, initialData}) => {


  const formik = useFormik({
    initialValues: {
      certificateName: initialData?.certificateName || '',
      certificateID: initialData?.certificateID || '',
      certificateUrl: initialData?.certificateUrl || '',
      certificateStartMonth: initialData?.certificateStartMonth || '',
      certificateStartYear: initialData?.certificateStartYear || '',
      certificateEndMonth: initialData?.certificateEndMonth || '',
      certificateEndYear: initialData?.certificateEndYear || '',
      certificateNotExpire: initialData?.certificateNotExpire || false,
    },
    validationSchema: Yup.object({
      certificateName: Yup.string().required('Certification name is required'),
      certificateID: Yup.string(), // Optional, adjust based on your requirements
      certificateUrl: Yup.string().url('Invalid URL').required('Certification URL is required'), // Optional, adjust based on your requirements
      certificateStartMonth: Yup.string().required('Start month is required'),
      certificateStartYear: Yup.string().required('Start year is required'),
     }),
    onSubmit: (values) => {
          let submissionValues = { ...values };

          // Check if certificateNotExpire is true
          if (submissionValues.certificateNotExpire) {
            // Set certificateEndYear and certificateEndMonth to empty strings
            submissionValues = {
              ...submissionValues,
              certificateEndYear: '',
              certificateEndMonth: '',
            };
          }

          onSave(submissionValues); // Assuming onSave is a function passed as a prop for handling form submission.
    },
  });

  // Correct implementation for the checkbox change handler
const handleCheckboxChange = (e) => {
  const { checked } = e.target;
  formik.setFieldValue('certificateNotExpire', checked);
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
    <div className="modal-content bg-white p-6 max-h-[90vh] rounded-2xl shadow-lg w-full md:w-1/2  overflow-y-scroll no-scrollbar">
      <form  onSubmit={formik.handleSubmit}>
        <h2 className="text-start text-xl font-bold">
              Certifications
            </h2>
            <p className='text-start text-sm text-gray-600 mb-4'>Add details of Certifications you have achieved/completed</p>
            <hr className="border-t my-4" />
            
  {/* Current Company Name */}
  <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Certification name <span className="text-red-500">*</span>
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="certificateName"
                      type="text"
                      placeholder="Please enter your certification name"
                      {...formik.getFieldProps("certificateName")}
                  />
                  {formik.touched.certificateName && formik.errors.certificateName ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.certificateName}
                      </div>
                  ) : null}
                  </div>

                      {/* Social Profile URL */}
          <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                  Certification completion ID
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="certificateID"
                      type="text"
                      placeholder="Please mention your course completion ID"
                      {...formik.getFieldProps("certificateID")}
                  />
                  {formik.touched.certificateID && formik.errors.certificateID ? (
                      <div className="text-red-500 text-xs">
                      {formik.errors.certificateID}
                      </div>
                  ) : null}
                  </div>


          {/* Certification URL */}
          <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-start" htmlFor="certificateUrl">
                  Certification URL<span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="certificateUrl"
                  type="text"
                  placeholder="Please mention your completion URL"
                  {...formik.getFieldProps("certificateUrl")}
                />
                {formik.touched.certificateUrl && formik.errors.certificateUrl && (
                  <div className="text-red-500 text-xs">{formik.errors.certificateUrl}</div>
                )}
          </div>

            {/* Duration from - Year and Month Selects */}
            <div className="my-4">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
              Certification validity starts
              </label>
              <div className="flex gap-4">

                <select
                  name="certificateStartMonth"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('certificateStartMonth')}
                >
                  <option value="">MM</option>
                  {generateMonthOptions()}
                </select>
                <select
                  name="certificateStartYear"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('certificateStartYear')}
                >
                  <option value="">YYYY</option>
                  {generateYearOptions()}
                </select>
              </div>
              {formik.touched.certificateStartYear && formik.errors.certificateStartYear && (
                <div className="text-red-500 text-xs">{formik.errors.certificateStartYear}</div>
              )}
              {formik.touched.certificateStartMonth && formik.errors.certificateStartMonth && (
                <div className="text-red-500 text-xs">{formik.errors.certificateStartMonth}</div>
              )}
            </div>

         {/* Certification Validity End - Conditional Rendering */}
         {!formik.values.certificateNotExpire && (
            <div className="my-4">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2" htmlFor="certificateEndMonth">
                Certification validity ends
              </label>
              <div className="flex gap-4">
                <select
                  name="certificateEndMonth"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('certificateEndMonth')}
                >
                  <option value="">MM</option>
                  {generateMonthOptions()}
                </select>
                <select
                  name="certificateEndYear"
                  className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  {...formik.getFieldProps('certificateEndYear')}
                >
                  <option value="">YYYY</option>
                  {generateYearOptions()}
                </select>
              </div>
            </div>
          )}

         {/* Checkbox for "This certification does not expire" */}
         <div className='flex justify-start items-center'>
            <input
              type="checkbox"
              id="certificateNotExpire"
              name="certificateNotExpire"
              className='mx-3'
              onChange={handleCheckboxChange}
              checked={formik.values.certificateNotExpire}
            />
            <label htmlFor="certificateNotExpire" className="text-md text-gray-600">
              This certification does not expire
            </label>
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

export default EditCertificationModel