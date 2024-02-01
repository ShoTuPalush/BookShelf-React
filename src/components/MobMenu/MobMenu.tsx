import { Link } from 'react-router-dom';
import { SvgIconArrowRight, SvgIconUser } from '../SvgIcon/SvgIcon';
import mobMenu from '../../images/menu.png';
import { useSelector } from 'react-redux';
import { selectIsLeggenIn, selectUser } from '../../redux/auth/selector';
import { Navigation } from '../Navigation/Navigation';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';

export const MobMenu = () => {
  const isLoggenIn = useSelector(selectIsLeggenIn);
  const user = useSelector(selectUser);
  return (
    <>
      <div className="md:hidden absolute top-0 left-0 pt-16 w-lvw h-lvh z-10">
        <div className="z-10 relative ">
          {isLoggenIn ? (
            <div
              className="mt-10 ml-5 relative flex h-12 w-44 rounded-full text-white 
            items-center px-3 font-medium text-sm justify-between"
            >
              <div className="bg-white absolute rounded-full w-9 h-9 flex items-center justify-center">
                <SvgIconUser />
              </div>
              <p className="ml-10 font-bold text-xl">{user.name}</p>
            </div>
          ) : (
            <Link
              to={'/register'}
              className="mt-10 ml-5 flex h-12 w-44 rounded-2xl bg-indigo-600 border-black border
               text-white items-center px-3 font-medium text-sm justify-between"
            >
              Sign up <SvgIconArrowRight />
            </Link>
          )}

          <Navigation display="flex flex-col items-center mt-[200px]" color="text-white fill-white" />
        </div>
        {isLoggenIn && <LogOutBtn position="z-10 bottom-5 left-5" />}

        <img className="w-full h-full absolute top-0 " src={mobMenu} alt="" />
      </div>
    </>
  );
};
