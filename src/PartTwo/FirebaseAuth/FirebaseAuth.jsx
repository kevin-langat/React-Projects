import { auth } from '../FirebaseTodoApp/Firebase';
import FirebaseTodoApp from '../FirebaseTodoApp/FirebaseTodoApp';
import AuthPage from './AuthPage';
import UnAuthPage from './UnAuthPage';
import { useAuthState } from 'react-firebase-hooks/auth';
function FirebaseAuth() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, loading, error);
  const content = loading ? (
    <h2>Loading Please wait...</h2>
  ) : user ? (
    <div>
      <AuthPage authState={true} />
      <FirebaseTodoApp authState={true} />
    </div>
  ) : (
    <div className='w-full items-center flex flex-col gap-3'>
      <UnAuthPage />
      <FirebaseTodoApp />
    </div>
  );
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <h2>Firebase Auth</h2>
      {content}
    </div>
  );
}
export default FirebaseAuth;
