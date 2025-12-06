import MenuList from './MenuList';
import { menus } from './data';

function TreeView() {
  return (
    <div className=' rounded-[0.5em] w-1/2 text-gray-300 overflow-x-auto py-2  bg-gray-800 flex flex-col items-center justify-center overflow-y-auto custom-scrollbar outline-1l gap-2  outline-gray-600'>
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
