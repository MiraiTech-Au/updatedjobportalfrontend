import React from 'react'
import { useFormik } from 'formik'; 
import * as Yup from 'yup';

const EditEducationModel = ({onSave,onClose,initialData }) => {
    const formik = useFormik({
      initialValues: {
        education: initialData?.education || '',
        instituteName: initialData?.instituteName || '',
        course: initialData?.course || '',
        specialization: initialData?.specialization || '',
        courseType: initialData?.courseType || '',
        startYear: initialData?.startYear || '',
        endYear: initialData?.endYear || '',
        location: initialData?.location || ''
      },
      validationSchema: Yup.object({
        education: Yup.string().required('Education is required'),
        instituteName: Yup.string().required('Institute Name is required'),
        course: Yup.string().required('Course is required'),
        specialization: Yup.string().required('Specialization is required'),
        courseType: Yup.string().required('CourseType is required'),
        startYear: Yup.string().required('Starting year is required'),
        endYear: Yup.string().required('Ending year is required'),
        location: Yup.string().required('Location is required'),
      }),
      onSubmit: (values) => {
        onSave(values);
      },
    });

  return (
    <div>
        <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 h-[90vh] overflow-y-scroll no-scrollbar">
      <form onSubmit={formik.handleSubmit}>
            <h2 className="text-start text-xl font-bold">
              Add Education
            </h2>
            <hr className="border-t my-4" />

         {/* Education field */}
         <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Education <span className="text-red-500">*</span>
              </label>
              <select
                name="education"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("education")}
              >
                <option value="">Select education</option>
                <option value="Doctorate/phD">Doctorate/phD</option>
                <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
                <option value="Graduation/Diploma">Graduation/Diploma</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.education && formik.errors.education ? (
                          <div className="text-red-500 text-md">{formik.errors.education}</div>
                        ) : null}
            </div>

            {/* University/Institute Name */}
            <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                    University/Institute <span className="text-red-500">*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="instituteName"
                        type="text"
                        placeholder="Enter Your Institute Name"
                        {...formik.getFieldProps("instituteName")}
                    />
                    {formik.touched.instituteName && formik.errors.instituteName ? (
                        <div className="text-red-500 text-md">
                        {formik.errors.instituteName}
                        </div>
                    ) : null}
                    </div>


            
          {/* Course field */}
         <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Course <span className="text-red-500">*</span>
              </label>
              <select
                name="course"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("course")}
              >
                <option value="">Select course</option>
                <option value="BTech/BE">B.Tech/B.E.</option>
                <option value="BCom">B.Com</option>
                <option value="BSc">B.Sc</option>
                <option value="BA">B.A</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.course &&
              formik.errors.course ? (
                <div className="text-red-500 text-md">
                  {formik.errors.course}
                </div>
              ) : null}
            </div>

            {/* Specialization field */}
         <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Specialization <span className="text-red-500">*</span>
              </label>
              <select
                name="specialization"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("specialization")}
              >
                <option value="">Select specialization</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Automobile">Automobile</option>
                <option value="Biomedical">Biomedical</option>
                <option value="Computers">Computers</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.specialization &&
              formik.errors.specialization ? (
                <div className="text-red-500 text-md">
                  {formik.errors.specialization}
                </div>
              ) : null}
            </div>

     {/* Course type */}
<div className="mt-4">
  <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
    Course type <span className="text-red-500">*</span>
  </label>
  <div className="mt-4">
    <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center">
      <label className="inline-flex md:items-center">
        <input
          type="radio"
          className="form-radio"
          name="courseType"
          value="full-time"
          checked={formik.values.courseType === "full-time"}
          onChange={() => formik.setFieldValue("courseType", "full-time")}
        />
        <span className="ml-2">Full-Time</span>
      </label>
      <label className="inline-flex md:items-center md:ml-6">
        <input
          type="radio"
          className="form-radio"
          name="courseType"
          value="part-time"
          checked={formik.values.courseType === "part-time"}
          onChange={() => formik.setFieldValue("courseType", "part-time")}
        />
        <span className="ml-2">Part-Time</span>
      </label>
      <label className="inline-flex md:items-center md:ml-6">
        <input
          type="radio"
          className="form-radio"
          name="courseType"
          value="correspondence/distance learning"
          checked={formik.values.courseType === "correspondence/distance learning"}
          onChange={() => formik.setFieldValue("courseType", "correspondence/distance learning")}
        />
        <span className="ml-2">Correspondence/Distance learning</span>
      </label>
    </div>
    {formik.touched.courseType && formik.errors.courseType ? (
      <div className="text-red-500 text-md">{formik.errors.courseType}</div>
    ) : null}
  </div>
</div>


     {/* Course duration */}
<div className="my-4">
  <label className="block text-start text-gray-700 text-sm font-bold mb-2">
    Course duration <span className="text-red-500">*</span>
  </label>
  <div className="flex justify-between items-center">
    <div>
    <select
      name="startYear"
      className="block appearance-none w-[220px] bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
      {...formik.getFieldProps("startYear")}
    >
      <option value="">Starting Year</option>
      {/* Dynamically generate year options */}
      {[...Array(5)].map((_, i) => {
        const year = new Date().getFullYear() - i;
        return (
          <option key={year} value={year}>{year}</option>
        );
      })}
    </select>
    {formik.touched.startYear && formik.errors.startYear ? (
    <div className="text-red-500 text-md">{formik.errors.startYear}</div>
  ) : null}
    </div>
    <p className='-mt-4 text-gray-700 text-md font-bold'>To</p>
     <div>
     <select
      name="endYear"
      className="block appearance-none w-[220px] bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
      {...formik.getFieldProps("endYear")}
    >
      <option value="">Ending year</option>
      {/* Dynamically generate year options */}
      {[...Array(5)].map((_, i) => {
        const year = new Date().getFullYear() - i;
        return (
          <option key={year} value={year}>{year}</option>
        );
      })}
    </select>

  {formik.touched.endYear && formik.errors.endYear ? (
    <div className="text-red-500 text-md">{formik.errors.endYear}</div>
  ) : null}
     </div>
  </div>
  {/* Display errors for startYear and endYear */}
 
</div>

            
     
            {/*  Location field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-start text-sm font-bold mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <select
                name="location"
                className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                {...formik.getFieldProps("location")}
              >
                <option value="">Select Location</option>
                <option value="delhi">Delhi</option>
                <option value="gurugram">Gurugram</option>
                {/* Dynamically populate locations here */}
              </select>
              {formik.touched.location &&
              formik.errors.location ? (
                <div className="text-red-500 text-md">
                  {formik.errors.location}
                </div>
              ) : null}
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

export default EditEducationModel