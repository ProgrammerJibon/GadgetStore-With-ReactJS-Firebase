import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6lg font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-lg font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">Go Home</a>
      </div>
    </div>
  );
};

export default NotFound;