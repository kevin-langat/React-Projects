import { useEffect, useState } from 'react';

function RandomQuoteGen() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  async function fetchQuote() {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/quotes/random', {
        method: 'GET',
      });
      const result = await res.json();
      setLoading(false);
      console.log(result);
      result ? setQuote(result) : setQuote(null);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className='w-11/12 items-center flex flex-col justify-center'>
      <h2>Random Quote Generator</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='w-3/5 mt-10 items-center flex flex-col justify-center  rounded-[0.3em] py-3 px-6 bg-gray-950'>
          <h2 className='text-green-400'>{quote?.quote}</h2>
          <h2 className='text-white mt-5 text-sm'>{quote?.author}</h2>
        </div>
      )}
      <button
        onClick={fetchQuote}
        className='bg-green-500 rounded-[0.3em] py-1 px-3 mt-5'
      >
        Refresh
      </button>
    </div>
  );
}
export default RandomQuoteGen;
