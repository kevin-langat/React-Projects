import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GithubProfileFinder() {
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('kevin-langat');
  const [userInfo, setUserInfo] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const navigateTo = useNavigate();

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const result = await response.json();
    if (result?.message === 'Not Found') {
      setInput('kevin-langat');
      setErrorMsg(result?.message);
    } else {
      setUserInfo(result);
    }
  }
  useEffect(() => {
    fetchUser();
  }, [userName]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setUserName(input);
    }
  }

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Github Profile Finder</h2>
      <input
        type='text'
        className=' outline-1 caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200italic text-vsm placeholder:text-nlsm py-0.5 pl-4'
        placeholder='Enter anything here'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={input}
      />
      {errorMsg ? (
        <h2 className='text-vsm text-red-500'>User {errorMsg} </h2>
      ) : null}

      <button
        onClick={() => setUserName(input)}
        disabled={!input && input.trim() === ''}
        className='bg-gray-900 disabled:bg-gray-300 disabled:text-red-500/30  transform duration-300 ease-out  text-gray-300 px-2 rounded-[0.3em] text-lsm py-0.5'
      >
        Find User
      </button>
      <div className='bg-gray-900 shadow h-80 rounded-2xl shadow-gray-900 flex py-2 w-3/5 flex-col items-center justify-center p-3 text-gray-200 transform duration-300 delay-75 overflow-y-auto gap-4'>
        <div className='flex h-[90%] flex-row justify-between w-full '>
          <div className='w-1/2 items-center justify-around p-4  h-full flex flex-col gap-4'>
            <div className='flex flex-col justify-center gap-1 items-center w-full'>
              <h2 className='text-orange-500 text-2xl'>{userInfo?.name}</h2>
              <h2 className='text-vsm text-justify'>{userInfo?.bio}</h2>
              <h2 className='text-vsm text-indigo-500 text-justify'>
                {userInfo?.location}
              </h2>
            </div>
            <div className='w-3/4 gap-1 grid grid-cols-2 justify-start'>
              <h2 className='text-red-600'>Repos</h2>

              <h2 className='text-red-600'>Followers</h2>
              <h2 className='text-fuchsia-600'>{userInfo?.public_repos}</h2>
              <h2 className='text-fuchsia-600'>{userInfo?.followers}</h2>
            </div>
            <button
              onClick={() => navigateTo(userInfo?.html_url)}
              className='w-11/12 disabled:bg-gray-400 bg-sky-500 py-0.5 rounded-[0.3em]'
            >
              Check profile On github
            </button>
          </div>
          <img
            className='h-full w-[45%] rounded-[0.3em]'
            src={userInfo?.avatar_url}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default GithubProfileFinder;
