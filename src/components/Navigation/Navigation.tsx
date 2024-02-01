import { NavLink } from 'react-router-dom';
import { SvgIconShopingList } from '../SvgIcon/SvgIcon';
import clsx from 'clsx';

interface IPropsNavigation {
  display: string;
  color: string;
}

export const Navigation = ({ display, color }: IPropsNavigation) => {
  return (
    <>
      <div className={display}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            clsx(
              'transition-all text-sm mr-6 py-2 rounded-3xl uppercase ',
              'dark:text-white hover:bg-[#EAC645] hover:px-4 ',
              isActive ? 'bg-[#EAC645] font-bold px-4 ' : 'font-medium ' + color,
            )
          }
        >
          home
        </NavLink>
        <NavLink
          to={'/shoping-list'}
          className={({ isActive }) =>
            clsx(
              'flex transition-all text-sm mr-6 py-2 rounded-3xl uppercase ',
              'dark:text-white dark:fill-white hover:bg-[#EAC645] hover:px-4 ',
              isActive ? 'bg-[#EAC645] font-bold px-4 ' : 'font-medium ' + color,
            )
          }
        >
          shoping list
          <SvgIconShopingList />
        </NavLink>
      </div>
    </>
  );
};
