import { Link, NavLink } from 'react-router-dom';
import { SvgIconLogo, SvgIconShopingList } from '../SvgIcon/SvgIcon';

export const Navigation = () => {
  return (
    <>
      <div className="flex items-center">
        <Link to={'/'} className="flex gap-2 font-medium mr-20 dark:text-[#F3F3F3]">
          <SvgIconLogo />
          Bookshelf
        </Link>
        <div className="flex">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'bg-[#EAC645] hidden md:block font-bold text-sm mr-6 px-4 py-2 rounded-3xl uppercase'
                : 'hover:bg-[#EAC645]  hover:px-4 rounded-3xl  transition-all hidden md:block font-medium text-sm mr-6 py-2  uppercase dark:text-white'
            }
          >
            home
          </NavLink>
          <NavLink
            to={'/shoping-list'}
            className={({ isActive }) =>
              isActive
                ? 'bg-[#EAC645] hidden md:flex font-bold text-sm mr-6 px-4 py-2 rounded-3xl uppercase'
                : 'hover:bg-[#EAC645] hover:px-4 rounded-3xl transition hidden md:flex font-medium text-sm mr-6 py-2 uppercase dark:text-white dark:fill-white'
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
