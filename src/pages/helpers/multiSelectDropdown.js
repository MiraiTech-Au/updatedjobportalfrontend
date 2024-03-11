import React, { useEffect, useState } from "react";
import AsyncCreatableSelect from 'react-select/async-creatable';

import { getSkills } from "../profile/profile.action";
import { useDispatch } from "react-redux";
 
const MultiSelectDropdown = ({ onSave, onClose, selectedValues = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [responseKey, setResponseKey] = useState([])
  const dispatch = useDispatch()
 
  useEffect(() => {
    setSelectedOptions(selectedValues);
  }, [selectedValues]);
 
  const loadOptions = async (inputValue, callback) => {
    try {
      dispatch(getSkills(inputValue)).then((res)=>{
        setResponseKey(res?.payload)
      })
      const options = responseKey.map(skill => ({
        label: skill.label,
        value: skill.value
      }));
      callback(options.length ? options : [{ label: `Add "${inputValue}"`, value: inputValue, isAddNew: true }]);
    } catch (error) {
      callback([]);
    }
  };
 
  const handleChange = (selectedOptions) => {
    // Extract the most recently selected or added option
    const newSelection = selectedOptions[selectedOptions.length - 1];
 
    // Determine if the new selection is a newly added skill
    if (newSelection.isAddNew) {
      
 
      // Construct a new option object for the added skill
      const newSkillOption = {
        label: newSelection.label.replace('Add "', '').replace('"', ''), // Remove the 'Add' prefix
        value: newSelection.value,
      };
 
      // Update state with the new option included
      setSelectedOptions((prevOptions) => [...prevOptions, newSkillOption]);
    } else {
      // If it's an existing skill, simply update the state with the new array of selected options
      setSelectedOptions(selectedOptions);
    }
  };
 
 
  return (
    <div className="w-full z-0">
      <AsyncCreatableSelect
        cacheOptions
        loadOptions={loadOptions}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
        formatCreateLabel={(inputValue) => `Add "${inputValue}" as a new skill`}
        noOptionsMessage={() => null} // Hide the default no options message
      />
      <div className="flex justify-start py-2">
        <button
          onClick={() => onSave(selectedOptions)}
          className="bg-blue-800 ml-1 hover:bg-blue-900 text-white py-1 px-3 rounded-lg justify-start items-start"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-3 px-2 py-1  border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
 
export default MultiSelectDropdown;