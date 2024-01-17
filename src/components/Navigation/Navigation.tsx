import { Link, NavLink } from 'react-router-dom';
import { SvgIconLogo, SvgIconShopingList } from '../SvgIcon/SvgIcon';

export const Navigation = () => {
  return (
    <>
      <div className="flex items-center">
        <Link to={'/'} className="flex gap-2 font-medium mr-20">
          <SvgIconLogo />
          Bookshelf
        </Link>
        <div className="flex">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'bg-yellow-500 hidden md:block font-bold text-sm mr-6 px-4 py-2 rounded-3xl uppercase'
                : 'hidden md:block font-medium text-sm mr-6 py-2  uppercase'
            }
          >
            home
          </NavLink>
          <NavLink
            to={'/shoping-list'}
            className={({ isActive }) =>
              isActive
                ? 'bg-yellow-500 hidden md:flex font-bold text-sm mr-6 px-4 py-2 rounded-3xl uppercase'
                : 'hidden md:flex font-medium text-sm mr-6 py-2 uppercase'
            }
          >
            shoping list
            <SvgIconShopingList />
          </NavLink>
        </div>
      </div>
    </>
  );
};
