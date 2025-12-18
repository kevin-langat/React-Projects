import { ChevronLeft, Heart, UserStar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RecipePage() {
  const params = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigateTo = useNavigate();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem('Favourites')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('Favourites', JSON.stringify(favourites));
  }, [favourites]);

  function handleAddToFav() {
    const cpyFavourites = [...favourites];
    const findRecipeInFav = favourites.indexOf(params.id);
    if (findRecipeInFav === -1) {
      cpyFavourites.push(params.id);
      setFavourites(cpyFavourites);
    } else {
      cpyFavourites.splice(findRecipeInFav, 1);
      setFavourites(cpyFavourites);
    }
  }

  async function fetchRecipes() {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.id}`
      );
      const data = await response.json();
      data ? setRecipe(data) : null;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className='flex w-full gap-4 flex-col items-center justify-center'>
      <h2 className='bg-green-400/30 rounded-full px-4 outline-1 outline-gray-300 text-nsm'>
        Recipe For {recipe?.name}
      </h2>
      <div className='w-full h-15 items-center justify-between px-10 text-tsm flex flex-row '>
        <div
          onClick={() => navigateTo('/recipe-app')}
          className='flex cursor-pointer bg-sky-400/50 rounded-full px-2  flex-row items-center justify-center'
        >
          <ChevronLeft className='pointer-events-none' size={22} />
          <h2
            onClick={() => navigateTo('/recipe-app')}
            className='hover:underline hover:text-orange-600'
          >
            Back To Recipe Lists
          </h2>
        </div>
        <div className='flex h-14 group flex-col items-center justify-center'>
          <Heart
            className={`${
              favourites.indexOf(params.id) !== -1
                ? 'stroke-1 stroke-red-500 fill-red-500'
                : ''
            } peer`}
            onClick={handleAddToFav}
          />
          <h2
            onClick={() => navigateTo('/recipe-app/favourites-page')}
            className='outline-1 transform duration-300 ease-out  hover:bg-gray-400 cursor-pointer group-hover:opacity-100 opacity-0 outline-gray-400 rounded-[0.3em] px-1 '
          >
            Favourites
          </h2>
        </div>
      </div>

      <div className='h-100 custom-scrollbar rounded-[0.3em] text-white justify-around items-center bg-gray-900 flex flex-row w-11/12 p-2 overflow-y-auto gap-4'>
        <img
          src={recipe?.image}
          className='rounded-[0.3em] w-1/3 h-11/12'
          alt=''
        />
        <div className=' pb-2 h-full gap-4 w-3/5 rounded-[0.3em] flex justify-center  flex-col items-center bg-gray-800'>
          <div className=' flex flex-row gap-3 items-center justify-center w-full'>
            <h2 className='text-gray-200'>Difficulty:</h2>
            <span className='bg-indigo-800/60 text-gray-300 text-tsm px-2 outline-1 outline-gray-500 rounded-full'>
              {recipe?.difficulty}
            </span>
          </div>
          <div className='flex px-7 w-full h-[85%]  py-4 gap-3 flex-row items-center'>
            <div className='w-1/3  flex flex-col items-center justify-center gap-3'>
              <h2 className='underline text-nlsm'>Ingredients</h2>
              <div className='flex flex-col items-center justify-start w-full gap-1'>
                {recipe?.ingredients.map((instruction, index) => (
                  <h2
                    key={index}
                    className='text-nsm'
                  >{`${index}: ${instruction}`}</h2>
                ))}
              </div>
            </div>{' '}
            <hr className='w-px h-full bg-gray-600' />
            <div className='w-3/5  flex flex-col items-center justify-center gap-3'>
              <h2 className='underline text-nlsm'>Instructions</h2>
              <div className='flex flex-col items-start justify-start w-full gap-1'>
                {recipe?.instructions.map((instruction, index) => (
                  <h2
                    key={index}
                    className='text-nsm'
                  >{`${index}: ${instruction}`}</h2>
                ))}
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecipePage;
