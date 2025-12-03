import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function CommonLayout() {
  return (
    <div className=' flex justify-center flex-col items-center gap-3 w-full'>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default CommonLayout;
