import React, { useState } from 'react';

const EducationModal = ({ onSave, onClose, existingEducation }) => {
  const [educationEntries, setEducationEntries] = useState(existingEducation || [{ degree: '', institution: '', year: '' }]);

  const handleInputChange = (index, e) => {
    const updatedEntries = [...educationEntries];
    updatedEntries[index][e.target.name] = e.target.value;
    setEducationEntries(updatedEntries);
  };

  const handleAddEducation = () => {
    setEducationEntries([...educationEntries, { degree: '', institution: '', year: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(educationEntries);
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="modal-content w-1/2 bg-white p-6 rounded-2xl shadow-lg overflow-auto h-[76vh] no-scrollbar">
    <h2 className='text-2xl mb-6'>Education Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            {educationEntries.map((entry, index) => (
                <div key={index} className="flex flex-wrap -mx-2 mb-4">
                    <input
                        type="text"
                        name="degree"
                        value={entry.degree}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Degree"
                        className="w-full p-2 border border-gray-300 rounded-lg m-2"
                    />
                    <input
                        type="text"
                        name="institution"
                        value={entry.institution}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Institution"
                        className="w-full p-2 border border-gray-300 rounded-lg m-2"
                    />
                    <input
                        type="text"
                        name="year"
                        value={entry.year}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Year"
                        className="w-full p-2 border border-gray-300 rounded-lg m-2"
                    />
                </div>
            ))}
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={handleAddEducation} className="bg-green-600 hover:bg-green-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Add Another Education
                </button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Save
                </button>
                <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                    Close
                </button>
            </div>
        </form>
    </div>
</div>

  );
};

export default EducationModal;
