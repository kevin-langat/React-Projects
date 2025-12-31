function PaginationNav({
  noOfItems,
  setCurrentPage,
  length,
  lastItemOnPage,
  currentPage,
  firstItemOnPage,
}) {
  const paginationNavArray = Array.from(
    { length: noOfItems },
    (_, index) => index + 1
  );
  console.log(paginationNavArray);
  return (
    <div className=' flex flex-row items-center justify-center gap-3'>
      <button
        disabled={firstItemOnPage === 0}
        className='bg-blue-500 text-gray-300 disabled:bg-gray-400'
        onClick={() => {
          firstItemOnPage > 0 ? setCurrentPage(currentPage - 1) : null;
        }}
      >
        Previous
      </button>
      {paginationNavArray.map((item, index) => (
        <button
          onClick={() => setCurrentPage(item)}
          className={`bg-gray-300 ${
            currentPage === item ? 'outline-1 outline-red-500' : ''
          } text-sky-600 w-8`}
          key={item}
        >
          {item}
        </button>
      ))}
      <button
        disabled={lastItemOnPage === length}
        className='bg-blue-500 text-gray-300 disabled:bg-gray-400'
        onClick={() => {
          lastItemOnPage < length ? setCurrentPage(currentPage + 1) : null;
        }}
      >
        Next
      </button>
    </div>
  );
}
export default PaginationNav;
