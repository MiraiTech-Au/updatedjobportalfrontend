import React, { useState } from 'react';

const PersonalDetailsModal = ({ onSave, onClose,existingPersonalDetails }) => {
  const [details, setDetails] = useState(existingPersonalDetails || { firstName: '',lastName: '', email: '', primaryContact: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(details);
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="modal-content w-1/2 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className='text-2xl mb-6'>Add Personal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input 
                type="text" 
                name="firstName" 
                value={details.firstName} 
                onChange={handleChange} 
                placeholder="FirstName" 
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input 
                type="text" 
                name="lastName" 
                value={details.lastName} 
                onChange={handleChange} 
                placeholder="LastName" 
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input 
                type="email" 
                name="email" 
                value={details.email} 
                onChange={handleChange} 
                placeholder="Email" 
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input 
                type="text" 
                name="primaryContact" 
                value={details.primaryContact} 
                onChange={handleChange} 
                placeholder="Phone" 
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end space-x-2">
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

export default PersonalDetailsModal;
