// Modal.js
import React from 'react';
import { FaLock, FaTimes } from 'react-icons/fa';
const PurchaseModel = ({ onClose, children }) => {
    return (
        <div className='fixed z-20 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center' onClick={onClose}>
            <div className='relative bg-white rounded-lg shadow-xl' onClick={e => e.stopPropagation()}>
                <div className='flex justify-between items-center p-5 rounded-t border-b'>
                    <FaLock className="text-xl text-gray-700" />
                    <FaTimes className="text-xl text-gray-700 cursor-pointer" onClick={onClose} />
                </div>
                <div className='p-5'>
                    {children}
                </div>
                <div className='flex justify-center p-6'>
                    <button className='px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModel;
