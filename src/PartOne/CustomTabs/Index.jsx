import { useState } from 'react';
import { Tabs } from './data';

function CustomTabComponent() {
  const [currentActiveTab, setCurrentActiveTab] = useState(2);
  console.log(currentActiveTab);
  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Custom Tab Component</h2>
      <div className=' bg-gray-900 flex py-4 w-1/2 flex-col items-center justify-center transform duration-500 ease-out overflow-y-auto gap-4'>
        <div className='flex flex-row gap-3'>
          {Tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setCurrentActiveTab(index)}
              style={
                currentActiveTab === index
                  ? { backgroundColor: 'orangered' }
                  : { backgroundColor: 'blue' }
              }
              className='text-gray-200 rounded-[0.2em] px-2 py-1'
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='w-3/4 rounded-[0.3em] outline-1 outline-gray-600 text-gray-200 flex-col p-1 flex items-center justify-center bg-gray-700'>
          {Tabs.map((tab, index) =>
            currentActiveTab === index ? (
              <h2
                className='duration-200 text-justify delay-75 ease-in-out transform '
                key={index}
              >
                {tab.content}
              </h2>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomTabComponent;
