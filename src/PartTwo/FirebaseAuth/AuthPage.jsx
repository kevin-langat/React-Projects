import { Toaster } from '@/components/ui/sonner';
import { logout } from '../FirebaseTodoApp/Firebase';
import { useEffect } from 'react';
import { toast } from 'sonner';

function AuthPage({ authState }) {
  useEffect(() => {
    if (authState) {
      toast.success('Welcome back login success');
    }
  }, []);
  return (
    <div>
      <div className='px-14 flex flex-col items-center gap-3 bg-gray-950 rounded-2xl text-white py-10'>
        <Toaster />
        <h2>Welcome to Auth Page</h2>
        <button onClick={logout} className='px-2 py-1 bg-indigo-500'>
          Logout
        </button>
      </div>
    </div>
  );
}
export default AuthPage;
