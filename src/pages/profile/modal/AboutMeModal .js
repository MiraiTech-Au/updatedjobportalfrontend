import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MultiSelectDropdown from "../../helpers";

const AboutMeModal = ({
  onSave,
  onClose,
  existingDescription,
  title,
  modalKey,
}) => {
  const [charCount, setCharCount] = useState(0); // Renamed to charCount

  const characterCountValidator = (charLimit) => {
    return Yup.string()
      .required("A description is required")
      .test("char-count", `Description must be within ${charLimit} characters`, value => {
        const numChars = value.length; // Changed to count characters
        setCharCount(numChars); // Update character count for UI feedback
        return numChars <= charLimit;
      });
  };

  const getDescriptionValidationSchema = () => {
    switch (modalKey) {
      case "resumeHeadline":
        return characterCountValidator(100); // Example character limit
      case "careerSummary":
        return characterCountValidator(300); // Example character limit
      default:
        return Yup.string().required("A description is required");
    }
  };

  const formik = useFormik({
    initialValues: {
      description: existingDescription[modalKey] || "",
    },
    validationSchema: Yup.object({
      description: getDescriptionValidationSchema(),
    }),
    onSubmit: (values) => {
      onSave(values.description);
    },
  });

  // Initially set character count when component mounts
  useEffect(() => {
    setCharCount(formik.values.description.length);
  }, [formik.values.description]);

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-auto z-10">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg modal-scrollable">
        <div className="md:w-[650px]">
          <h2 className="text-start text-xl font-bold">{title}</h2>
          {modalKey !== "keySkills" ? (
            <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Write here..."
                className="w-full p-2 border border-gray-300 rounded-lg h-32 resize-none"
              />
              <p className="text-start text-gray-500 text-sm italic">Character count: {charCount}. <span className="italic font-normal">(Please Insert Minimum 50 Characters)</span></p>
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500 text-xs">{formik.errors.description}</div>
              ) : null}
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
          ) : (
            <MultiSelectDropdown onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMeModal;
