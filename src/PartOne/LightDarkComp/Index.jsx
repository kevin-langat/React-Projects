import { useEffect, useState } from 'react';

function LightDarkComponent() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));
  function changeAndSaveTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className='w-full h-125 items-center justify-center flex-col flex'>
      <h2 className='underline select-none'>Light Dark Component</h2>
      <div
        className={`h-full w-full -gray-300 overflow-x-auto py-2  ${
          theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'
        } flex flex-col items-center justify-center transform duration-500 ease-out overflow-y-auto gap-2`}
      >
        <button
          onClick={changeAndSaveTheme}
          className={`${
            theme === 'dark'
              ? 'text-gray-900 bg-gray-300'
              : 'text-gray-200 bg-gray-900'
          }  px-2 py-0.5 transform duration-500 ease-out rounded-[0.2em]`}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default LightDarkComponent;
