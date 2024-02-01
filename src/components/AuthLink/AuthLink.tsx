import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const AuthLink = () => {
  return (
    <>
      <div className="text-center">
        <NavLink
          className={({ isActive }) =>
            clsx('mr-5 font-bold text-sm uppercase md:text-lg', isActive ? 'text-[#4F2EE8] underline' : 'text-gray-500')
          }
          to={'/register'}
        >
          sign up
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx('mr-5 font-bold text-sm uppercase md:text-lg', isActive ? 'text-[#4F2EE8] underline' : 'text-gray-500')
          }
          to={'/login'}
        >
          sign in
        </NavLink>
      </div>
    </>
  );
};
