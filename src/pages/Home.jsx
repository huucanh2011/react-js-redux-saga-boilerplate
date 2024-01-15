import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../redux/user/slice';
import { Button } from '@/shared/components/ui/button';

const HomePage = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.users.user);

  console.log(data, isLoading);

  useEffect(() => {
    dispatch(getUserAction(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col gap-2">
        <p className="text-3xl">Home</p>
        <div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
