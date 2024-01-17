import { Link } from 'react-router-dom';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { SvgIconArrowRight, SvgIconMenuBurger } from '../SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <>
      <header className="mb-8 h-16 flex items-center justify-between px-6 border border-black rounded-b-lg">
        <Navigation />
        <div className="flex items-center gap-4 md:gap-6">
          <SwitchTheme />
          <Link
            to={'/register'}
            className="hidden md:flex h-12 w-44 rounded-2xl bg-indigo-600 border-black border text-white items-center px-3 font-medium text-sm justify-between"
          >
            Sign up <SvgIconArrowRight />
          </Link>
          <button className="md:hidden cursor-pointer">
            <SvgIconMenuBurger />
          </button>
        </div>
      </header>
    </>
  );
};
