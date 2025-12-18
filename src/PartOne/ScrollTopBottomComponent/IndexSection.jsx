import { ChevronUp, Eye, ThumbsDown, ThumbsUp } from 'lucide-react';
import useFetch from '../CustomHooks/UseFetch/useFetch';
import { useRef, useState } from 'react';

function ScrollToSection() {
  const { data, pending } = useFetch('https://dummyjson.com/posts?limit=70');
  const [input, setInput] = useState(1);
  const postsRef = useRef(new Map());

  function setPostRef(postId, element) {
    console.log(postsRef);
    if (element) {
      postsRef.current.set(postId, element);
    } else {
      postsRef.current.set(postId, element);
    }
  }

  function handleScroll() {
    const idToScroll = parseInt(input, 10);
    const targetNode = postsRef.current.get(idToScroll);

    if (targetNode) {
      targetNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function handleScrollTop() {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='w-full relative  gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Scroll To Section Component</h2>
      <h2 className='text-vsm'>scrolling within the Document</h2>
      <ChevronUp
        size={30}
        onClick={handleScrollTop}
        className='bg-orange-500 top-[90vh] cursor-pointer text-gray-300 right-10 fixed rounded-full '
      />
      <div className='flex flex-row gap-3 '>
        <input
          type='number'
          className=' outline-1 w-13 caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200italic text-vsm placeholder:text-nlsm py-0.5 pl-4'
          placeholder='Enter anything here'
          disabled={!data}
          max={data?.posts.length}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleScroll}
          className=' bg-sky-400 rounded-[0.3em] px-1 py-0.5 '
        >
          Scroll To Post
        </button>
      </div>

      {data && data.posts && data.posts.length
        ? data.posts.map((item, index) => (
            <div
              ref={(element) => setPostRef(item.id, element)}
              key={index}
              className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 flex w-3/4 flex-col p-5 overflow-y-auto gap-2'
            >
              <h2 className='text-fuchsia-500'>Post {index + 1}</h2>
              <h2 className='underline text-sky-400'>{item.title}</h2>
              <h2 className='text-nsm w-3/4 text-justify'>{item.body}</h2>
              <div className='flex w-3/4 h-20 gap-3 flex-row items-center'>
                {item?.tags?.map((tag) => (
                  <span className='bg-indigo-800/60 text-gray-300 text-tsm px-2 outline-1 outline-gray-500 rounded-full'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='w-3/4 flex flex-row items-center justify-start gap-3'>
                <div className='bg-green-700/30 group cursor-pointer py-0.5 items-center justify-center gap-1 w-15 rounded-[0.3em] flex flex-row'>
                  <ThumbsUp
                    size={18}
                    className='stroke-green-400 transform duration-700 ease-out group-hover:fill-green-400 group-hover:-translate-y-0.5 stroke-1'
                  />
                  <h2 className='text-tsm text-green-500'>
                    {item.reactions.likes}
                  </h2>
                </div>
                <div className='bg-orange-700/30 group cursor-pointer py-0.5 items-center justify-center gap-1 w-15 rounded-[0.3em] flex flex-row'>
                  <ThumbsDown
                    size={18}
                    className='stroke-orange-400 group-hover:fill-orange-500 transform duration-300 ease-in-out  group-hover:translate-y-0.5   stroke-1'
                  />
                  <h2 className='text-tsm text-orange-600'>
                    {item.reactions.dislikes}
                  </h2>
                </div>
                <div className='group cursor-pointer py-0.5 items-center justify-center gap-1 w-15 rounded-[0.3em] flex flex-row'>
                  <Eye
                    size={18}
                    className='stroke-gray-400  transform duration-150 ease-out  group-hover:scale-125   stroke-1'
                  />
                  <h2 className='text-tsm text-gray-400'>{item.views}</h2>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ScrollToSection;
