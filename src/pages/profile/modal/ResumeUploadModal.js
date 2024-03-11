import React, { useState } from 'react';

const ResumeUploadModal = ({ onSave, onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0]);
      }
    };
  
    const handleSave = () => {
      if (selectedFile) {
        onSave(selectedFile); // Pass the file object to the parent component
        onClose();
      } else {
        alert('Please select a file first!');
      }
    };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="modal-content bg-white w-1/2 p-6 rounded-2xl shadow-lg">
    <h2 className="text-2xl mb-6">Upload Documents</h2>
      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
        <br/>
      <button onClick={handleSave}  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Upload Resume</button>
      <button onClick={onClose}  className="mt-4 ml-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Close</button>
    </div>
    </div>
  );
};

export default ResumeUploadModal;
