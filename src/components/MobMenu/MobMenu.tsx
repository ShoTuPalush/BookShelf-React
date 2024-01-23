import { Link, NavLink } from 'react-router-dom';
import { SvgIconArrowRight, SvgIconShopingList } from '../SvgIcon/SvgIcon';
import mobMenu from './menu.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { logOut } from '../../redux/auth/operations';

export const MobMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className="md:hidden absolute top-0 left-0 pt-16 w-lvw h-lvh z-10">
        <div className="z-10 relative ">
          <Link
            to={'/register'}
            className="mt-10 ml-5 flex h-12 w-44 rounded-2xl bg-indigo-600 border-black border text-white items-center px-3 font-medium text-sm justify-between"
          >
            Sign up <SvgIconArrowRight />
          </Link>
          <div className="mt-32 ml-32 text-center">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'bg-yellow-500 font-bold text-sm w-20 block text-center mb-4 px-4 py-2 rounded-3xl uppercase'
                  : ' font-medium text-sm py-2 w-20 block text-center mb-4 uppercase text-white'
              }
            >
              home
            </NavLink>
            <NavLink
              to={'/shoping-list'}
              className={({ isActive }) =>
                isActive
                  ? 'bg-yellow-500 flex font-bold text-center text-sm w-40 px-4 py-2 rounded-3xl uppercase'
                  : 'flex font-medium text-sm py-2 uppercase fill-white text-white'
              }
            >
              shoping list
              <SvgIconShopingList />
            </NavLink>
          </div>
        </div>
        <button
          onClick={() => dispatch(logOut())}
          className="z-10 absolute bottom-5 left-5  flex h-12 w-30 rounded-2xl bg-white border-black border text-black items-center px-3 font-medium text-sm justify-between "
        >
          Log out
          <SvgIconArrowRight />
        </button>
        <img className="w-full h-full absolute top-0 " src={mobMenu} alt="" />
      </div>
    </>
  );
};
