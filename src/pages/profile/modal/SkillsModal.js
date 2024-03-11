import React, { useState } from 'react';

const SkillsModal = ({ onSave, onClose, existingSkills }) => {
  const [skills, setSkills] = useState(existingSkills || ['']);

  const handleSkillChange = (index, e) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(skills);
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="modal-content w-1/2 bg-white p-6 rounded-2xl shadow-lg overflow-auto h-[40vh] no-scrollbar">
    <h2 className='text-2xl mb-6'>Skills</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e)}
                        placeholder="Skill"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
            ))}
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={handleAddSkill} className="bg-green-600 hover:bg-green-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Add Another Skill
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

export default SkillsModal;
