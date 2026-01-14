import { useEffect, useState } from 'react';

function DragDrop() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const req = await fetch('https://dummyjson.com/todos?limit=5', {
      method: 'GET',
    });
    const res = await req.json();
    res && res.todos && res.todos.length > 0 && setTodos(res.todos);
  }
  useEffect(() => {
    fetchData();
  }, []);

  // dragg start
  function onDragStart(e, id) {
    e.dataTransfer.setData('id', id);
  }

  // ondrop
  function onDrop(e) {
    const itemId = parseInt(e.dataTransfer.getData('id'));
    const updatedTodo = todos.find((todo) => todo.id == itemId);
    updatedTodo.completed = true;
    const updatedTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos([...updatedTodos, updatedTodo]);
  }
  return (
    <div className='flex flex-col items-center justify-center gap-7 w-full'>
      <h2>Drag and Drop Component</h2>

      <div className='bg-gray-950 min-h-90 gap-4 items-center p-2 w-3/5 flex flex-col'>
        <div className='text-white flex flex-row *:bg-blue-500 *:rounded-[0.3em] *:px-2 *:py-0.5 w-full justify-around'>
          <h2>In Progress</h2>
          <h2>Completed</h2>
        </div>
        <div className='w-full flex flex-row items-center justify-between'>
          <div className='flex flex-col items-center justify-center gap-4 w-1/2'>
            {todos?.map((todo) =>
              !todo.completed ? (
                <div
                  draggable
                  onDragStart={(e) => onDragStart(e, todo.id)}
                  className='w-4/5 cursor-pointer h-16 text-gray-900 bg-gray-100 rounded-[0.3em] p-1 flex flex-col'
                >
                  <h2>{todo.todo}</h2>
                </div>
              ) : null
            )}
          </div>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e)}
            className='flex min-h-80 flex-col items-center justify-center gap-4 w-1/2'
          >
            {todos?.map((todo) =>
              todo.completed ? (
                <div className='w-4/5 cursor-pointer h-16 text-gray-900 bg-gray-100 rounded-[0.3em] p-1 flex flex-col'>
                  <h2>{todo.todo}</h2>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DragDrop;
