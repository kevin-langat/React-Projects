import { useEffect, useState } from 'react';

function SearchAutoComplete() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const res = await fetch('https://dummyjson.com/users?limit=100');
    const result = await res.json();
    result && result.users.length ? setUsers(result?.users) : null;
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  function handleOnChange(e) {
    const query = e.target.value;
    const foundUsers = users?.filter(
      (user) => user.firstName.toLowerCase().indexOf(query) > -1
    );
    setFilteredUsers(foundUsers);
  }

  return (
    <div className='w-full h-125  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Search Autocomplete Component</h2>
      <input
        type='text'
        className=' outline-1 caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200italic text-vsm placeholder:text-nlsm py-0.5 pl-4'
        placeholder='Enter anything here'
        onChange={handleOnChange}
      />
      <div className='bg-gray-900 custom-scrollbar rounded-[0.2em] shadow-gray-900 flex py-2 w-1/3 max-h-100 overflow-y-auto flex-col items-center justify-start p-3 text-gray-200 transform duration-300 delay-75 oerflow-y-auto gap-2'>
        {filteredUsers.length === 0 ? (
          <h2 className='text-nsm text-orange-600'>Search for a user</h2>
        ) : filteredUsers && filteredUsers.length ? (
          filteredUsers.map((user) => (
            <div className='w-full h-12 bg-gray-800 rounded-[0.2em] flex flex-row items-center justify-between px-2'>
              <div className=' flex flex-col h-full gap-1'>
                <h2 className='text-lsm text-green-500'>
                  {`${user.firstName}  ${user.lastName}`}
                </h2>
                <h2 className='text-vsm'>{user.company.title}</h2>
              </div>
              <img src={user.image} className='w-12 h-12 rounded-full' alt='' />
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default SearchAutoComplete;
