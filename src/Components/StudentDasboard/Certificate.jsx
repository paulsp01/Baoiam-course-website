import { useState } from 'react';

const Certificate = () => {
  const [activeTab, setActiveTab] = useState('certificates');

  return (
    <div className="max-w-screen  dark:bg-black dark:text-white dark:border dark:border-white mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 'certificates' ? 'border-b-2 border-indigo-700 font-bold' : ''
          }`}
          onClick={() => setActiveTab('certificates')}
        >
          Certificates
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 'badges' ? 'border-b-2 border-blue-500 font-bold' : ''
          }`}
          onClick={() => setActiveTab('badges')}
        >
          Badges
        </button>
      </div>

      {/* Content Div for Certificates/Badges */}
      <div className="mt-6 border rounded-lg shadow-lg p-6 bg-white dark:bg-black dark:text-white dark:border dark:border-white">
        {activeTab === 'certificates' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Certificates Div */}
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-semibold">Certificate Title</h2>
              <p className="text-sm">Description or issuer of the certificate</p>
            </div>
            {/* Add more certificates here */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Badges Div */}
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-semibold">Badge Title</h2>
              <p className="text-sm">Description or level of the badge</p>
            </div>
            {/* Add more badges here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
