import { useState } from 'react';

function Comment({ comment, key, handleAddReply }) {
  const [reply, setReply] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div>
      <li key={key}>{comment?.title}</li>
      {!showReplyBox ? (
        <button
          className='bg-blue-500 text-vsm px-2 py-0.5 rounded-full text-white '
          onClick={() => setShowReplyBox(true)}
        >
          Add Reply
        </button>
      ) : null}
      {showReplyBox ? (
        <div>
          <textarea
            className='outline-1 max-h-15 min-w-70 max-w-90 resize-x rounded-2xl'
            rows={'2'}
            cols={'20'}
            onChange={(e) => setReply(e.target.value)}
            value={reply}
          />
        </div>
      ) : null}

      {showReplyBox ? (
        <div className='flex flex-row gap-2'>
          <button
            className='bg-blue-500 text-vsm px-2 py-0.5 rounded-full text-white '
            onClick={() => {
              setShowReplyBox(false);
              setReply('');
              handleAddReply(comment.id, reply);
            }}
          >
            Submit Reply
          </button>
          <button
            className='bg-red-500 px-2 text-vsm py-0.5 rounded-full text-white '
            onClick={() => setShowReplyBox(false)}
          >
            Cancel
          </button>
        </div>
      ) : null}

      <div className='ml-10'>
        {comment && comment.children && comment.children.length > 0
          ? comment.children.map((child) => (
              <Comment handleAddReply={handleAddReply} comment={child} />
            ))
          : null}
      </div>
    </div>
  );
}
export default Comment;
