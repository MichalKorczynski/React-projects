import { useState } from 'react';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [notification, setNotification] = useState('');

  const handleReset = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setNotification('Password has been changed successfully!'); 

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-[400px]">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-white">
            Change your password here. After saving, you&apos;ll be logged out.
          </h2>
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Current password
          </label>
          <input
            type="password"
            className="w-1/2 border rounded-lg p-2"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)} 
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            New password
          </label>
          <input
            type="password"
            className="w-1/2 border rounded-lg p-2"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="mb-6 flex items-center">
          <label className="w-1/2 text-white font-medium text-right pr-4">
            Confirm password
          </label>
          <input
            type="password"
            className="w-1/2 border rounded-lg p-2"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-lg px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-500"
            onClick={handleReset} 
          >
            Change password
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

export default Password;
