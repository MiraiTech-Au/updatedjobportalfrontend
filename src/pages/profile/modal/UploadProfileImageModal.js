import React, { useState } from "react";

const UploadProfileImageModal = ({ onSave, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileObject, setFileObject] = useState(null);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const localImageUrl = URL.createObjectURL(file);
      setSelectedFile(localImageUrl);
      setFileObject(file);
    }
  };

  const handleSave = () => {
    if (fileObject) {
      console.log(fileObject);
      onSave(fileObject);
      onClose();
    } else {
      alert("Please select an image first!");
    }
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-start text-xl font-bold">Upload Profile Image</h2>
        <hr className="border-t my-4" />
        {/* <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-xl text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
          >
            Cancel
          </button>
          <button
            // onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out"
          >
            Save
          </button>
        </div> */}
        <h2 className="text-xl mb-4">Change Profile</h2>
        <div className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProfileImageModal;
