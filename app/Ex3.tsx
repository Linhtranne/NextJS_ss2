import React from 'react';

const SignUpForm = () => {
  return (
    <><h2>Ex3</h2><div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Form Sign up</h2>

          <form>
              {/* Name Field */}
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                      Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      placeholder="you@company.com"
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                      Phone number
                  </label>
                  <div className="flex">
                      <select className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                          <option>US</option>
                          <option>VN</option>
                          <option>IN</option>
                      </select>
                      <input
                          type="tel"
                          id="phone"
                          placeholder="+84 (123) 456-789"
                          className="w-full border border-l-0 border-gray-300 p-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
              </div>

              {/* Address Field */}
              <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">
                      Address
                  </label>
                  <textarea
                      id="address"
                      placeholder="Tell us a little about the project..."
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={3}
                  ></textarea>
              </div>

              {/* Skills Field */}
              <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skills
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                      {['HTML', 'JavaScript', 'UX design', 'ReactJS', 'CSS', 'Java'].map((skill, index) => (
                          <div key={index} className="flex items-center">
                              <input
                                  type="checkbox"
                                  id={skill}
                                  className="mr-2" />
                              <label htmlFor={skill} className="text-sm">
                                  {skill}
                              </label>
                          </div>
                      ))}
                  </div>
              </div>

              <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                  Sign up
              </button>
          </form>
      </div></>
  );
};

export default SignUpForm;
