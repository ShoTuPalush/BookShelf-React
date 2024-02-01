import { useSelector } from 'react-redux';
import { selectIsLeggenIn, selectUser } from '../../redux/auth/selector';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SvgIconArrowDown, SvgIconArrowRight, SvgIconUser } from '../SvgIcon/SvgIcon';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';

export const UserBar = () => {
  const [isLogOut, setIsLogOut] = useState(false);
  const isLoggenIn = useSelector(selectIsLeggenIn);
  const user = useSelector(selectUser);
  return (
    <>
      {isLoggenIn ? (
        <div
          onClick={() => setIsLogOut(!isLogOut)}
          className="hidden relative md:flex h-12 w-44 rounded-full bg-[#4F2EE8] 
                  border-black border text-white items-center px-3 font-medium text-sm justify-between"
        >
          <div className="flex items-center">
            <div className="bg-white absolute rounded-full w-9 h-9 flex items-center justify-center">
              <SvgIconUser />
            </div>
            <p className="ml-10 font-bold text-xl">{user.name}</p>
            <div className="mr-2 mb-1">
              <SvgIconArrowDown />
            </div>
          </div>
          {isLogOut && <LogOutBtn position="top-0 left-0  translate-y-11" />}
        </div>
      ) : (
        <Link
          to={'/register'}
          className="hidden md:flex h-12 w-44 rounded-2xl bg-[#4F2EE8] border-black border 
          text-white items-center px-3 font-medium text-sm justify-between"
        >
          Sign up <SvgIconArrowRight />
        </Link>
      )}
    </>
  );
};
