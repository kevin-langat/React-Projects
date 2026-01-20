import { useState } from 'react';
import Comment from './Comment';

function NestedComments({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      title: 'This is the first comment',
      children: [
        {
          id: 2,
          title: 'This child comment One',
          children: [],
        },
        {
          id: 3,
          title: 'This child comment Two',
          children: [],
        },
      ],
    },
  ]);

  function newComment(text) {
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  }

  function handleAddNewComment(
    cpyComments,
    getCurrentParentId,
    getCurrentReply,
  ) {
    for (let i = 0; i < cpyComments.length; i++) {
      let comment = cpyComments[i];
      if (comment.id === getCurrentParentId) {
        comment.children.unshift(newComment(getCurrentReply));
      }
    }
    for (let i = 0; i < cpyComments.length; i++) {
      let comment = cpyComments[i];
      handleAddNewComment(
        comment.children,
        getCurrentParentId,
        getCurrentReply,
      );
    }
  }

  function handleAddReply(getCurrentParentId, getCurrentReply) {
    let cpyComments = [...comments];

    handleAddNewComment(cpyComments, getCurrentParentId, getCurrentReply);
    setComments(cpyComments);
  }
  return (
    <div className='flex flex-col items-center gap-3'>
      <h2>Nested Comments</h2>

      <div className='flex flex-col gap-3 items-center '>
        <textarea
          className='outline-1 max-h-15 min-w-70 max-w-90 resize-x rounded-2xl'
          rows={'5'}
          cols={'10'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='bg-blue-500 w-1/2 py-1 rounded-[0.3em] text-white '
          onClick={() => {
            if (inputValue === '') return;
            setComments([newComment(inputValue), ...comments]);
            setInputValue('');
          }}
        >
          Add Comment
        </button>
      </div>

      <ul className='list-disc'>
        {comments.map((comment) => (
          <Comment
            handleAddReply={handleAddReply}
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </div>
  );
}
export default NestedComments;
