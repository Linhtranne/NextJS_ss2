/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';

const Ex2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(opt => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const clearSelection = () => {
    setSelectedOptions([]);
  };

  const applySelection = () => {
    setIsOpen(false);
  };

  const options = ['Label', 'Label', 'Label', 'Label'];

  return (
    <><h2>Ex2</h2><div className="relative w-64">
          <div className="border border-gray-300 rounded-md p-2 flex items-center" onClick={toggleDropdown}>
              <img src="/icons/icon.svg" alt="icon" className="w-5 h-5 mr-2" />
              <input
                  type="text"
                  placeholder="Input Label"
                  className="flex-grow focus:outline-none"
                  readOnly
                  value={selectedOptions.join(', ')} />
              <span className="ml-2 transform transition-transform duration-200">
                  {isOpen ? '▲' : '▼'}
              </span>
          </div>

          {isOpen && (
              <div className="absolute top-full mt-1 w-full border border-gray-300 rounded-md bg-white z-10">
                  <ul className="max-h-40 overflow-y-auto">
                      {options.map((option, index) => (
                          <li key={index} className="p-2 flex items-center">
                              <input
                                  type="checkbox"
                                  className="mr-2"
                                  checked={selectedOptions.includes(option)}
                                  onChange={() => toggleOption(option)} />
                              {option}
                          </li>
                      ))}
                  </ul>
                  <div className="flex justify-between p-2 border-t border-gray-300">
                      <button
                          className="text-gray-600 border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100"
                          onClick={clearSelection}
                      >
                          Clear
                      </button>
                      <button
                          className="bg-blue-600 text-white rounded-md px-4 py-1 hover:bg-blue-700"
                          onClick={applySelection}
                      >
                          Apply
                      </button>
                  </div>
              </div>
          )}
      </div></>
  );
};

export default Ex2;
