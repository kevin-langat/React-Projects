function PaginationHelper({ totalPages, currentPage, onPageChange }) {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  return (
    <div className='w-full py-2 items-center flex flex-col'>
      <div className='flex flex-row items-center justify-around gap-3'>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className='bg-orange-500 disabled:bg-gray-100 px-2 rounded-[0.3em]'
        >
          Previous
        </button>
        {generateNoOfPages().map((pageNo) => (
          <button
            key={pageNo}
            onClick={() => onPageChange(pageNo)}
            className=' px-2   rounded-[0.2em] bg-gray-400'
          >
            {pageNo}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className='bg-orange-500 disabled:bg-gray-100 px-2 rounded-[0.3em]'
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PaginationHelper;
