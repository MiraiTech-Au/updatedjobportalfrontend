import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditOnlineProfileModel = ({onSave,onClose,initialData}) => {
   // Formik setup
   const formik = useFormik({
    initialValues: {
      profileName: initialData?.profileName ||'',
      profileUrl: initialData?.profileUrl || '',
      description: initialData?.description || '',
    },
    validationSchema: Yup.object({
      profileName: Yup.string().required('Profile name is required'),
      profileUrl: Yup.string().url('Invalid URL').required('Profile URL is required'),
    }),
    onSubmit: (values) => {
      console.log("online profile",values)
      onSave(values);
    },
  });
  return (
    <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2  overflow-y-scroll no-scrollbar">
      <form onSubmit={formik.handleSubmit}>
      <h2 className="text-start text-xl font-bold">
              Online Profiles
            </h2>
            <p className='text-start text-sm text-gray-600 mb-4'>Add links to your social profiles (e.g. Linkedin profile, Facebook profile, etc.).</p>
            <hr className="border-t my-4" />

   {/* Social Profile Name */}
   <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
              Social Profile <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profileName"
              type="text"
              placeholder="Enter Social Profile Name"
              {...formik.getFieldProps('profileName')}
            />
            {formik.touched.profileName && formik.errors.profileName ? (
              <div className="text-red-500 text-xs">
                {formik.errors.profileName}
              </div>
            ) : null}
          </div>
 {/* Social Profile URL */}
 <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
              URL <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profileUrl"
              type="text"
              placeholder="Enter Social Profile URL"
              {...formik.getFieldProps('profileUrl')}
            />
            {formik.touched.profileUrl && formik.errors.profileUrl ? (
              <div className="text-red-500 text-xs">
                {formik.errors.profileUrl}
              </div>
            ) : null}
          </div>

                 {/* Description */}
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

export default EditOnlineProfileModel