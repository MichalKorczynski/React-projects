import { useState } from 'react';

const Account = () => {
  const [notification, setNotification] = useState('');

  const handleSave = () => {
    document.getElementById('name').value = '';
    document.getElementById('username').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    
    setNotification('Changes have been saved!');
    
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-[400px]">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-white">
            Make changes to your account here. Click save when you&apos;re done.
          </h2>
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-1/2 border rounded-lg p-2"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-1/2 border rounded-lg p-2"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Gender
          </label>
          <div className="w-1/2 flex items-center">
            <label className="mr-4 text-white">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-2"
              />
              Male
            </label>
            <label className="mr-4 text-white">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSave} 
            className="rounded-lg px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-500"
          >
            Save changes
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

export default Account;
