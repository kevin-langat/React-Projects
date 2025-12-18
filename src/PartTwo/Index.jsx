import { useState } from 'react';
import PaginationHelper from './Pagination';

function PaginationComponent() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }
  return (
    <div className='w-3/4 flex items-center justify-center flex-col gap-4'>
      <h2>Pagination Component</h2>
      <ul className='w-full gap-2 grid grid-cols-5'>
        {currentListOfItems.map((item) => (
          <li className='bg-green-500 flex flex-col items-center'>
            {item.name}
          </li>
        ))}
      </ul>
      <PaginationHelper
        totalPages={currentListOfItems.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default PaginationComponent;
