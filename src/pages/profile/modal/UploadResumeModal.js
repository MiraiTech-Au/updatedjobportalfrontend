import React, { useState } from 'react'

const UploadResumeModal = ({onSave,onClose}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileObject, setFileObject] = useState(null);
    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const localResumeUrl = URL.createObjectURL(file);
        setSelectedFile(localResumeUrl);
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
          <h2 className="text-start text-xl font-bold">Upload Document</h2>
          <hr className="border-t my-4" />
       
          <h2 className="text-lg mb-4">Update New Resume</h2>
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
}

export default UploadResumeModal