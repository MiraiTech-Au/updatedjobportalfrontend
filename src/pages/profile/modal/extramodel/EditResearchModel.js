import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditResearchModel = ({onSave,onClose,initialData}) => {
  const formik = useFormik({
    initialValues: {
      researchTitle: initialData.researchTitle || '',
      researchUrl: initialData.researchUrl || '',
      publishedYear: initialData.publishedYear || '',
      publishedMonth: initialData.publishedMonth || '',
      description: initialData.description || '',
    },
    validationSchema: Yup.object({
      researchTitle: Yup.string().required('Research Title is required'),
      researchUrl: Yup.string().url('Invalid URL').required('URL is required'),
      publishedYear: Yup.string().required('Year of publication is required'),
      publishedMonth: Yup.string().required('Month of publication is required'),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      onSave(values)
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
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2  overflow-y-scroll no-scrollbar">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-start text-xl font-bold">
          Research Publication
              </h2>
              <p className='text-start text-sm text-gray-600 mb-4'>Add links to your projects (e.g. Github links, etc.).</p>
              <hr className="border-t my-4" />
              
              {/* Research publication title */}
                <div className="mt-4">
                  <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2 text-start">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="researchTitle"
                    type="text"
                    placeholder="Enter title"
                    {...formik.getFieldProps('researchTitle')}
                  />
                  {formik.touched.researchTitle && formik.errors.researchTitle && (
                    <div className="text-red-500 text-xs">{formik.errors.researchTitle}</div>
                  )}
               </div>

                        {/* Research URL */}
            <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                    URL <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="researchUrl"
                        type="text"
                        placeholder="Enter URL here"
                        {...formik.getFieldProps("researchUrl")}
                    />
                    {formik.touched.researchUrl && formik.errors.researchUrl ? (
                        <div className="text-red-500 text-xs">
                        {formik.errors.researchUrl}
                        </div>
                    ) : null}
                    </div>
  
                                  
                {/* published on */}
                <div className="my-4">
                  <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                    Published on
                  </label>
                  <div className="flex gap-4">
                    <select
                      name="publishedYear"
                      className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      {...formik.getFieldProps("publishedYear")}
                    >
                      <option value="">Select year</option>
                      {generateYearOptions()}
                    </select>
                    <select
                      name="publishedMonth"
                      className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      {...formik.getFieldProps("publishedMonth")}
                    >
                      <option value="">Select month</option>
                      {generateMonthOptions()}
                    </select>
  
                  </div>
                  {formik.touched.publishedYear && formik.errors.publishedYear && (
                    <div className="text-red-500 text-xs">{formik.errors.publishedYear}</div>
                  )}
                  {formik.touched.publishedMonth && formik.errors.publishedMonth && (
                    <div className="text-red-500 text-xs">{formik.errors.publishedMonth}</div>
                  )}
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
                  className="w-full p-2 border border-gray-300 rounded-lg h-24 resize-none"
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

export default EditResearchModel