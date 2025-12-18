import { Star, UserStar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [favIndex, setFavIndex] = useState(
    JSON.parse(localStorage.getItem('Favourites'))
  );
  const cpyFavourites = [];
  async function fetchEachFavourite(favourite) {
    const res = await fetch(`https://dummyjson.com/recipes/${favourite}`);
    const result = await res.json();
    result ? cpyFavourites.push(result) : null;
    favIndex.length === cpyFavourites.length
      ? setFavourites(cpyFavourites)
      : null;
  }

  useEffect(() => {
    favIndex
      ? favIndex.forEach((favourite) => {
          fetchEachFavourite(favourite);
        })
      : null;
  }, []);
  return (
    <div className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 p-5 overflow-y-auto gap-4'>
      {favourites?.map((recipe) => (
        <div className=' pb-4 h-full gap-3 rounded-[0.3em] flex justify-around flex-col items-center bg-gray-800'>
          <img src={recipe.image} className='rounded-[0.3em]' alt='' />
          <div className=' flex flex-col items-center justify-center w-full gap-1'>
            <h2 className='text-fuchsia-500'>{recipe.name}</h2>
            <div className=' w-full text-nsm grid-cols-2 grid place-items-center items-center'>
              <h2 className='text-sky-500'>Preparation Time</h2>
              <h2 className='text-sky-500'>Cook Time</h2>
              <h2 className='text-gray-300'>
                {' '}
                {`${recipe.prepTimeMinutes} mins`}
              </h2>
              <h2 className='text-gray-300'>
                {`${recipe.cookTimeMinutes} mins`}
              </h2>
            </div>
          </div>
          <div className='grid grid-cols-2 w-3/4 py-4 text-vsm gap-3 flex-row items-center'>
            {recipe.tags?.map((tag, index) => (
              <span className='bg-indigo-800/60 text-gray-300 text-tsm px-2 outline-1 outline-gray-500 rounded-full'>
                {tag}
              </span>
            ))}
          </div>
          <div className='w-3/4  flex flex-row items-center justify-start gap-3'>
            <div className='bg-green-700/30 group cursor-pointer py-0.5 items-center justify-center px-2 gap-1 rounded-[0.3em] flex flex-row'>
              <Star
                size={18}
                className='stroke-green-400 transform duration-700 ease-out group-hover:fill-green-400 group-hover:-translate-y-0.5 stroke-1'
              />
              <h2 className='text-tsm text-green-500'>{recipe.rating}</h2>
            </div>
            <div className='bg-sky-700/30 group cursor-pointer py-0.5 items-center justify-center gap-1 px-2 rounded-[0.3em] flex flex-row'>
              <UserStar
                size={18}
                className='stroke-orange-400 group-hover:fill-orange-500 transform duration-300 ease-in-out  group-hover:-translate-y-0.5   stroke-1'
              />
              <h2 className='text-tsm text-sky-400'>{recipe.reviewCount}</h2>
            </div>
          </div>
          <Link
            to={`/recipe-app/recipe-page/${recipe?.id}`}
            className='bg-cyan-500 text-gray-200 px-2 rounded-[0.3em] py-0.5'
          >
            Recipe Details
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Favourites;
