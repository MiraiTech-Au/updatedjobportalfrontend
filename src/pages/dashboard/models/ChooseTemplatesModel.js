import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import Img1 from "../../../assets/svgs/template1.png"
import Img2 from "../../../assets/svgs/template2.jpg"
import Img3 from "../../../assets/svgs/template3.png"
import { FaLock } from 'react-icons/fa';
import PurchaseModel from './PurchaseModel';

const ChooseTemplatesModel = ({onClose}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplates, setSelectedTemplates] = useState([]);

  const templates = [
      { id: 1, src: Img1, title: 'Fresher', isFree: true },
      { id: 2, src: Img2, title: 'Mid-level', isFree: true },
      { id: 3, src: Img3, title: 'Experienced', isFree: true },
      { id: 4, src: Img1, title: 'Fresher', isFree: false },
      { id: 5, src: Img2, title: 'Mid-level', isFree: false },
      { id: 6, src: Img3, title: 'Experienced', isFree: false },
      { id: 7, src: Img1, title: 'Fresher', isFree: false },
      { id: 8, src: Img2, title: 'Mid-level', isFree: false },
      { id: 9, src: Img3, title: 'Experienced', isFree: false },
      { id: 10, src: Img1, title: 'Fresher', isFree: false },
      { id: 11, src: Img2, title: 'Mid-level', isFree: false },
      { id: 12, src: Img3, title: 'Experienced', isFree: false },
      // More templates, marked as isFree: false
  ];
  const handleSelectTemplate = (template) => {
      if (template.isFree) {
          setSelectedTemplates(prev => 
              prev.find(t => t.id === template.id) ? prev : [...prev, template]
          );
          alert("Template Selected Successfully");
      } else {
          setShowModal(true);
      }
  };

  // const handleNavigate = (templateId) => {
  //     navigate(`/template${templateId}`);
  // };


  return (
    <div>
          <div className="modal fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="modal-content bg-white p-6 rounded-2xl shadow-lg w-full md:w-4/5 ">
              <div className='relative '>
                <h2 className='text-3xl ml-5 font-semibold'>Create Digital Resume</h2>
                <button className='absolute top-2 right-2'  onClick={onClose}>
                    <MdClose className='text-2xl'/>
                </button>
                <hr className="border-t mt-4" />

                <div className=' h-[80vh] overflow-y-scroll no-scrollbar'>

                {showModal && (
                <PurchaseModel onClose={() => setShowModal(false)}>
                    <div>
                         <h2 className='text-lg font-bold text-center mb-4'>Purchase Template</h2>
                         <p className='text-sm text-gray-600 mb-4'>Get full access to this premium template for only $9.99.</p>
                    </div>
                    {/* Include additional purchase details and actions here */}
                </PurchaseModel>
            )}


{/* Display Selected Templates */}
{/* onClick={() => handleNavigate(template.id)} */}
<div className='mt-5 grid grid-cols-3 mb-3 gap-4'>
    {selectedTemplates.map((template) => (
        <div key={template.id} className='flex flex-col items-center' >
            <img
                src={template.src}
                className='w-56 h-72 shadow-2xl cursor-pointer'
                alt={template.title}
            />
            <h4 className='font-semibold text-center text-xl mt-5'>{template.title}</h4>
        </div>
    ))}
</div>

<h1 className='text-center text-blue-600 font-bold text-4xl mt-3 mb-4'>Choose The Templates</h1>

{/* Template Cards */}
<div className='mt-5'>
    <div className='grid grid-cols-3 gap-4'>
        {templates.map((template) => (
            <div key={template.id} className='relative flex flex-col items-center hover:text-blue-600'>
                {!template.isFree && <FaLock className="absolute top-2 right-2 text-lg text-gray-500" />}
                <img
                    src={template.src}
                    className='w-56 h-72 shadow-2xl transition-all duration-700 hover:scale-110'
                    alt={template.title}
                />
                <div className='flex justify-between items-center mt-4 mb-6'>
                <h4 className=' font-semibold mr-6  text-lg'>{template.title}</h4>
                <button className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 text-md rounded-lg' onClick={() => handleSelectTemplate(template)}>Select</button>
                </div>
            </div>
        ))}
    </div>
</div>
                </div>
              </div>
        
            </div>
        </div>
    </div>
  )
}

export default ChooseTemplatesModel