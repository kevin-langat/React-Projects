import { Button, List, ListItem, ListItemText } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './Firebase';

function Todo({ authState, todoItem, setCurrentEdittedId, setInputValue }) {
  function handleDelete(todoiD) {
    deleteDoc(doc(db, 'todos', todoiD));
  }
  return (
    <List>
      <ListItem>
        <ListItemText primary={todoItem.title.todo} />
      </ListItem>
      {authState && (
        <div>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => handleDelete(todoItem.id)}
          >
            Delete
          </Button>
          <Button
            variant='contained'
            color='info'
            onClick={() => {
              setInputValue(todoItem.title.todo);
              setCurrentEdittedId(todoItem.id);
            }}
          >
            Edit
          </Button>
        </div>
      )}
    </List>
  );
}
export default Todo;
