import { useState } from 'react';
import PaginationNav from './PaginationNav';

function PaginationTwo() {
  const [currentPage, setCurrentPage] = useState(1);

  const dummydata = Array.from({ length: 200 }, (_, index) => index + 1);
  const noOfItems = 10;
  const itemsPerPage = dummydata.length / noOfItems;
  const lastItemOnPage = itemsPerPage * currentPage;
  const firstItemOnPage = lastItemOnPage - itemsPerPage;

  const slicedData = dummydata.slice(firstItemOnPage, lastItemOnPage);

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <div className=' w-full grid grid-cols-5 gap-1 *:bg-blue-500'>
        {slicedData.map((data, index) => (
          <button>{data}</button>
        ))}
      </div>

      <PaginationNav
        noOfItems={noOfItems}
        length={dummydata.length}
        lastItemOnPage={lastItemOnPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        firstItemOnPage={firstItemOnPage}
      />
    </div>
  );
}
export default PaginationTwo;
