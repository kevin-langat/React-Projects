import { Eye, Star, ThumbsDown, ThumbsUp, UserStar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function RecipeApp() {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [specificRecipes, setSpecificRecipes] = useState(null);

  async function fetchRecipes() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/recipes?limit=40');
      const data = await response.json();
      setLoading(false);
      data && data.recipes && data.recipes.length
        ? setRecipes(data.recipes)
        : null;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchSpecificRecipes() {
    try {
      if (input.trim() === '') {
        return;
      }
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await response.json();
      setLoading(false);
      data && data.recipes && data.recipes.length
        ? setRecipes(data.recipes)
        : null;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, [input === '']);

  return (
    <div className='w-full relative gap-4 items-center flex-col flex'>
      <h2 className='underline select-none'>Recipe App</h2>
      <input
        type='text'
        className='outline-1 focus:outline-gray-500 focus:placeholder:text-gray-300 min-w-40 field-sizing-content caret-sky-400 outline-gray-500 rounded-[0.3em] bg-gray-200 italic text-vsm placeholder:text-nlsm placeholder:italic py-0.5 pl-4'
        placeholder='Search for a city'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onFocus={() => {
          input !== '' ? setInput('') : null;
        }}
      />

      <button
        onClick={fetchSpecificRecipes}
        className=' bg-indigo-400 px-3 text-gray-300 rounded-[0.3em] text-nsm py-0.5 '
      >
        Search A Recipe
      </button>
      {loading ? (
        <span className='loaderThree'></span>
      ) : (
        <div className=' pt-3 custom-scrollbar rounded-[0.3em] text-white items-center bg-gray-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 p-5 overflow-y-auto gap-4'>
          {recipes?.map((recipe, index) => (
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
                  <h2 className='text-tsm text-sky-400'>
                    {recipe.reviewCount}
                  </h2>
                </div>
              </div>
              <Link
                to={`recipe-page/${recipe?.id}`}
                className='bg-cyan-500 text-gray-200 px-2 rounded-[0.3em] py-0.5'
              >
                Recipe Details
              </Link>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}
export default RecipeApp;
