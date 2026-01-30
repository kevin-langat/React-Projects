import { useEffect, useState } from 'react';

function SortComponent() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('select');

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://dummyjson.com/users');
      const result = await res.json();
      result && result.users && setUsers(result.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function sortUsers() {
    if (sortOrder === 'asc') {
      let cpyUsers = [...users];
      cpyUsers = cpyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? 1 : -1,
      );

      setUsers(cpyUsers);
    } else if (sortOrder === 'desc') {
      let cpyUsers = [...users];
      cpyUsers = cpyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? -1 : 1,
      );

      setUsers(cpyUsers);
    }
  }

  useEffect(() => {
    sortUsers();
  }, [sortOrder]);

  return (
    <div className='flex flex-col items-center gap-3'>
      <h2>Sort Component</h2>
      <div className='flex flex-col items-center gap-3'>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className='outline-1 outline-gray-300 rounded-[0.3em] p-1'
        >
          <option value='select'>select an option</option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>

        <div>
          {users && users.length > 0 ? (
            <div className='grid grid-cols-3 gap-x-8 gap-y-2'>
              {users.map((user) => (
                <h2
                  className='outline-1 px-4 py-0.5 outline-gray-200 text-center'
                  key={user.id}
                >
                  {user.firstName}
                </h2>
              ))}
            </div>
          ) : (
            <h2>Loading please wait...</h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default SortComponent;
