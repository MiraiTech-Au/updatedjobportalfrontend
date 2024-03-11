import React, { useState } from "react";
import "./phoneInput.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import "react-phone-number-input/style.css";
import ChangeEmail from "./ChangeEmailModal";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const AvailabilityOptions = [
  "15 Days or less",
  "1 Month",
  "2 Months",
  "3 Months",
  "More than 3 Months",
];

const EditProfileModal = ({ onSave, onClose, personalInfo, email }) => {
  const [shouldChangeEmail, setShouldChangeEmail] = useState(false);
  const wordLimit = (maxWords) => {
    return Yup.string().test(
      'word-count',
      `Must be ${maxWords} words or fewer`,
      (value) => {
        return value.split(/\s+/).filter(Boolean).length <= maxWords;
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      firstName: personalInfo?.firstName || "",
      middleName: personalInfo?.middleName || "",
      lastName: personalInfo?.lastName || "",
      experience: personalInfo?.experience || "",
      totalExperienceYear: personalInfo?.totalExperienceYear || "",
      totalExperienceMonth: personalInfo?.totalExperienceMonth || "",
      currentSalary: personalInfo?.currentSalary || "",
      desiredSalary: personalInfo?.desiredSalary || "",
      currentLocation: personalInfo?.currentLocation || "",
      primaryContact: personalInfo?.primaryContact || "",
      secondaryContact: personalInfo?.secondaryContact || "",
      email: email || "XXXXXXXXX",
      noticePeriod: personalInfo?.noticePeriod || "",
      homeAddress: personalInfo?.homeAddress || "",
      mailingAddress: personalInfo?.mailingAddress || "",
      dateOfBirth: personalInfo?.dateOfBirth || '',
      nationality: personalInfo?.nationality || '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required").max(20, 'First name must be 20 characters or less'),
      lastName: Yup.string().required("Last name is required").max(20, 'Last name must be 20 characters or less'),
      experience: Yup.string().required("Experience is required"),
      totalExperienceYear: Yup.string().test(
        "totalExperience-test",
        "Add valid experience duration",
        function (value) {
          const { totalExperienceMonth } = this.parent;
          return (
            (value && value.trim() !== "") ||
            (totalExperienceMonth && totalExperienceMonth.trim() !== "")
          );
        }
      ),
      totalExperienceMonth: Yup.string().test(
        "totalExperience-test",
        "Add valid experience duration",
        function (value) {
          const { totalExperienceYear } = this.parent;
          return (
            (value && value.trim() !== "") ||
            (totalExperienceYear && totalExperienceYear.trim() !== "")
          );
        }
      ),
      currentSalary: Yup.number()
        .typeError("Salary must be a number")
        .required("Salary is required")
        .positive("Salary must be positive"),
      currentLocation:  wordLimit(30).required("Current location is required"),
      primaryContact: Yup.string()
        .test("isValid-phone", "Mobile number is not valid", (value) =>
          isValidPhoneNumber(value || "")
        )
        .required("Primary contact number is required"),
      noticePeriod: Yup.string().required("Availability is required"),
      dateOfBirth: Yup.date()
    .max(new Date(), "Date of Birth cannot be in the future.")
    .required("Date of Birth is required."),
    }),
    onSubmit: (values) => {
      onSave(values);
    },
  });

 


  const handlePrimaryPhoneChange = (phone) => {
    formik.setFieldValue("primaryContact", phone);
  };

  const handleSecondaryPhoneChange = (phone) => {
    formik.setFieldValue("secondaryContact", phone);
  };

  return (
    <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-1/2 h-[90vh] overflow-y-scroll no-scrollbar">
        {shouldChangeEmail ? (
          <ChangeEmail onCancel={() => setShouldChangeEmail(false)} />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-start text-xl font-bold">
              Personal Information
            </h2>

            <hr className="border-t my-4" />
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Enter Your First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Middle Name <span className="text-red-500"></span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="middleName"
                type="text"
                placeholder="Enter Your Middle Name"
                {...formik.getFieldProps("middleName")}
              />
              {formik.touched.middleName && formik.errors.middleName ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.middleName}
                </div>
              ) : null}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            <div className="mt-4">
              <div className="mt-4">
                <div className="flex flex-col md:flex-row md:mb-0 mb-4 md:items-center ">
                  <label className="inline-flex md:items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="experience"
                      value="fresher"
                      checked={formik.values.experience === "fresher"}
                      onChange={formik.handleChange}
                    />
                    <span className="ml-2">Fresher</span>
                  </label>
                  <label className="inline-flex md:items-center md:ml-6 ">
                    <input
                      type="radio"
                      className="form-radio"
                      name="experience"
                      value="experienced"
                      checked={formik.values.experience === "experienced"}
                      onChange={formik.handleChange}
                    />
                    <span className="ml-2">Experienced</span>
                  </label>
                </div>
              </div>
              <div className="my-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Total experience <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <select
                    name="totalExperienceYear"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps("totalExperienceYear")}
                  >
                    <option value="">Select year</option>
                    {/* Dynamically populate year options here */}
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    {/* etc. */}
                  </select>

                  <select
                    name="totalExperienceMonth"
                    className="block appearance-none w-full bg-white border border-gray-200 py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    {...formik.getFieldProps("totalExperienceMonth")}
                  >
                    <option value="">Select month</option>
                    {/* Dynamically populate month options here */}
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                    {/* etc. */}
                  </select>
                </div>
                {formik.touched.totalExperienceMonth &&
                formik.errors.totalExperienceMonth &&
                formik.touched.totalExperienceYear &&
                formik.errors.totalExperienceYear ? (
                  <div className="text-red-500 text-xs">
                    {formik.errors.totalExperienceMonth}
                  </div>
                ) : null}
              </div>
            </div>
            {/* Salary field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Salary <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="currentSalary"
                name="currentSalary"
                type="text"
                placeholder="Enter Your Salary"
                {...formik.getFieldProps("currentSalary")}
              />
              {formik.touched.currentSalary && formik.errors.currentSalary ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.currentSalary}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Desired Salary <span className="text-red-500"></span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="desiredSalary"
                name="desiredSalary"
                type="text"
                placeholder="Enter Your Salary"
                {...formik.getFieldProps("desiredSalary")}
              />
              {formik.touched.desiredSalary && formik.errors.desiredSalary ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.desiredSalary}
                </div>
              ) : null}
            </div>

            {/* Current Location field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
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

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                {...formik.getFieldProps("dateOfBirth")}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.dateOfBirth}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Home Address <span className="text-red-500"></span>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="homeAddress"
                name="homeAddress"
                type="text"
                placeholder="Enter Your Home Address"
                {...formik.getFieldProps("homeAddress")}
              />
              {formik.touched.homeAddress && formik.errors.homeAddress ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.homeAddress}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mailing Address <span className="text-red-500"></span>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mailingAddress"
                name="mailingAddress"
                type="text"
                placeholder="Enter Your Salary"
                {...formik.getFieldProps("mailingAddress")}
              />
              {formik.touched.mailingAddress && formik.errors.mailingAddress ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.mailingAddress}
                </div>
              ) : null}
            </div>

            {/* Mobile Number field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Primary Contact <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                placeholder="Enter your primary phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.primaryContact}
                onChange={handlePrimaryPhoneChange}
              />
              {formik.touched.primaryContact && formik.errors.primaryContact ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.primaryContact}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Secondary Contact <span className="text-red-500"></span>
              </label>
              <PhoneInput
                placeholder="Enter your secondary phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.secondaryContact}
                onChange={handleSecondaryPhoneChange}
              />
              {formik.touched.secondaryContact &&
              formik.errors.secondaryContact ? (
                <div className="text-red-500 text-xs">
                  {formik.errors.secondaryContact}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <p className="flex md:flex-row flex-col">
                {email}
                <div
                  className="my-2 md:mx-2 font-bold text-xs mt-[6px] text-blue-600 cursor-pointer"
                  onClick={() => setShouldChangeEmail(true)}
                >
                  Change
                </div>
              </p>
            </div>
            {/* Availability to join buttons */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Availability to join
              </label>
              <div className="flex justify-center flex-wrap gap-2">
                {AvailabilityOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => formik.setFieldValue("noticePeriod", option)}
                    className={`flex-1 sm:flex-none text-center px-2 py-1 border rounded-full text-sm ${
                      formik.values.noticePeriod === option
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300"
                    } focus:outline-none transition duration-300 ease-in-out transform active:scale-95`}
                    style={{
                      minWidth: "90px",
                    }}
                  >
                    {option}
                  </button>
                ))}
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
        )}
      </div>
    </div>
  );
};

export default EditProfileModal;
