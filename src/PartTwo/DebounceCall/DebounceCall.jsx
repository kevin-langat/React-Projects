import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function DebounceCall() {
  const [inputValue, setInputValue] = useState('');
  const [pending, setPending] = useState(false);
  const [recipes, setRecipes] = useState();
  const debounceParamValue = useDebounce(inputValue, 1000);
  console.log(debounceParamValue);

  const fetchRecipes = async () => {
    try {
      setPending(true);
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`,
      );
      const result = await res.json();
      result && result.recipes && setRecipes(result.recipes);
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, [debounceParamValue]);
  console.log(recipes);
  return (
    <div className='flex w-11/12 flex-col items-center gap-4'>
      <h2>Debounce Api Call</h2>

      <TextField
        id='todo'
        label='Create Todo'
        variant='outlined'
        size='small'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className='bg-gray-950 p-3 py-2 text-white'>
        {recipes && recipes.length > 0 ? (
          <div className='w-full grid grid-cols-3 gap-y-3'>
            {recipes.map((recipe) => (
              <div
                className='bg-gray-800 rounded-[0.3em] w-[96%] p-2'
                key={recipe.id}
              >
                <img src={recipe.image} alt='' />
                <h2>{recipe.name}</h2>
              </div>
            ))}
          </div>
        ) : recipes && recipes.length === 0 ? (
          <h2>No recipes matching this keyword</h2>
        ) : (
          <h2>Loading please wait...</h2>
        )}
      </div>
    </div>
  );
}
export default DebounceCall;
