import { useState } from 'react'
import './App.css'
import Preferences from './components/Preferences';
import Password from './components/Password';
import Account from './components/Account';

function content(sel) {
  if(sel==='account') {
    return (
      <>
        <Account></Account>
      </>
    );
  }
  else if(sel=='password') {
    return (
      <>
        <Password></Password>
      </>
    )
  }
  else if(sel=='preferences') {
    return (
      <>
        <Preferences></Preferences>
      </>
    )
  }
}
function App() {
  const [selectedSection, setSelectedSection] = useState('account')

  const handleButtonClick = (section) => {
    setSelectedSection(section)
  }

  return (
    <>
      <div className='h-[500px] w-200 bg-gray-950 flex justify-center rounded'>
          <div className='w-[20%] bg-gray-950 rounded'>
            <button 
              className='text-blue-50 m-auto my-[10px] text-3xl hover:text-zinc-400'
              onClick={() => handleButtonClick('account')}
            >
              Account
            </button><br />
            <button 
              className='text-blue-50 m-auto my-[10px] text-3xl hover:text-zinc-400'
              onClick={() => handleButtonClick('password')}
            >
              Password
            </button><br />
            <button 
              className='text-blue-50 m-auto my-[10px] text-3xl hover:text-zinc-400'
              onClick={() => handleButtonClick('preferences')}
            >
              Preferences
            </button><br />
          </div>


          <div className='w-[80%] bg-gray-900 rounded p-4'>
            {content(selectedSection)}
          </div>
      </div>
    </>
  )
}

export default App