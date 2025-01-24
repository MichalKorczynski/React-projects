import { useState } from 'react';

const Preferences = () => {
  const [notificationSettings, setNotificationSettings] = useState("All");
  const [notificationFrequency, setNotificationFrequency] = useState(50);
  const [isChecked, setIsChecked] = useState(false); 
  const [notification, setNotification] = useState('');

  const handleSave = () => {
    setNotification('Preferences have been saved!');

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-[400px]">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-white">
            Change preferences here. Click save when you&apos;re done.
          </h2>
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Notification Settings
          </label>
          <select
            className="w-1/2 border rounded-lg p-2"
            value={notificationSettings}
            onChange={(e) => setNotificationSettings(e.target.value)}
          >
            <option>All</option>
            <option>Not all</option>
          </select>
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Notification Frequency
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={notificationFrequency}
            onChange={(e) => setNotificationFrequency(e.target.value)}
            className="w-1/2"
          />
        </div>

        <div className="mb-6 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Collect additional data
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-lg px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-500"
            onClick={handleSave} 
          >
            Save preferences
          </button>
        </div>

        {notification && (
          <div className="mt-4 text-center text-green-500 font-medium">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preferences;
