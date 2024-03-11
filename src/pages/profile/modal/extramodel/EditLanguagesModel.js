import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditLanguagesModel = ({onSave,onClose,initialData}) => {
  const formik = useFormik({
    initialValues: {
      language: initialData.language || '',
      proficiency: initialData.proficiency || '',
    },
    validationSchema: Yup.object({
      language: Yup.string().required('Selecting a language is required'),
      proficiency: Yup.string().required('Selecting a proficiency level is required'),
    }),
    onSubmit: (values) => {
      onSave(values)
    },
  });


  return (
    <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2  overflow-y-scroll no-scrollbar">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-start text-xl font-bold">
              Languages
            </h2>
            <p className='text-start text-sm text-gray-600 mb-4'>Add details of Languages you have known</p>
            <hr className="border-t my-4" />
        
            {/* Language field */}
            <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
              Language <span className="text-red-500">*</span>
            </label>
            <select
              name="language"
              className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              {...formik.getFieldProps('language')}
            >
              <option value="">Select language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="marathi">Marathi</option>
            </select>
            {formik.touched.language && formik.errors.language && (
              <div className="text-red-500 text-xs">{formik.errors.language}</div>
            )}
          </div>

        {/* Proficiency field */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
              Proficiency <span className="text-red-500">*</span>
            </label>
            <select
              name="proficiency"
              className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              {...formik.getFieldProps('proficiency')}
            >
              <option value="">Select proficiency</option>
              <option value="beginner">Beginner</option>
              <option value="proficient">Proficient</option>
              <option value="expert">Expert</option>
            </select>
            {formik.touched.proficiency && formik.errors.proficiency && (
              <div className="text-red-500 text-xs">{formik.errors.proficiency}</div>
            )}
          </div>

        
            <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
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

export default EditLanguagesModel