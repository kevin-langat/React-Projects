import { Button, TextField } from '@mui/material';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './Firebase';
import Todo from './Todo';

function FirebaseTodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState();
  const [currentEdittedId, setCurrentEdittedId] = useState(null);
  function handleAddTodo(e) {
    e.preventDefault();

    currentEdittedId !== null
      ? updateDoc(doc(db, 'todos', currentEdittedId), {
          todo: inputValue,
        })
      : addDoc(collection(db, 'todos'), {
          todo: inputValue,
          timeStamp: serverTimestamp(),
        });
    setCurrentEdittedId(null);
    setInputValue('');
  }
  const q = query(collection(db, 'todos'), orderBy('timeStamp', 'desc'));

  useEffect(() => {
    onSnapshot(q, (snapShot) => {
      setTodos(
        snapShot.docs.map((docItem) => ({
          id: docItem.id,
          title: docItem.data(),
        })),
      );
    });
  }, [inputValue]);

  console.log(todos, 'Todos');
  return (
    <div className='flex flex-col gap-8'>
      <h2>Firebase Todo App</h2>

      <form onSubmit={handleAddTodo}>
        <TextField
          id='todo'
          label='Create Todo'
          variant='outlined'
          size='small'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type='submit' variant='contained' color='primary'>
          {currentEdittedId !== null ? 'Edit Todo' : '   Add Todo'}
        </Button>
      </form>

      <div>
        {todos && todos.length === 0 ? (
          <h2>No todos right now. Please add one</h2>
        ) : (
          todos &&
          todos.length > 0 &&
          todos.map((item) => (
            <Todo
              setInputValue={setInputValue}
              setCurrentEdittedId={setCurrentEdittedId}
              todoItem={item}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default FirebaseTodoApp;
