
import React from 'react';

const Ex1 = () => {
  return (
    <><h2>Ex1</h2><div className="flex flex-col mb-5">
      <label htmlFor="inputField" className="text-sm text-blue-700 mb-2">
        Label
      </label>
      <div className="relative">
        <input
          id="inputField"
          className=" px-4 py-2 pr-10 border border-blue-700 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Placeholder" />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <img src="/icons/eye.svg" alt="Toggle visibility" className="w-5 h-5" />
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-2">Helper Text</p>
    </div></>
  );
};

export default Ex1;
