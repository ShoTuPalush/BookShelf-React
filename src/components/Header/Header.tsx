import { Link } from 'react-router-dom';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { SvgIconArrowRight, SvgIconCross, SvgIconMenuBurger } from '../SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';
import { useState } from 'react';
import { MobMenu } from '../MobMenu/MobMenu';

export const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const mobMenuOpen = () => {
    document.documentElement.className = 'no-scroll';
    setIsMobMenuOpen(true);
  };

  const mobMenuClose = () => {
    document.documentElement.className = '';
    setIsMobMenuOpen(false);
  };
  return (
    <>
      <header className="px-5 md:px-6 mb-10 h-16 flex items-center justify-between border bg-white border-black rounded-b-lg relative z-20">
        <Navigation />
        <div className="flex items-center gap-4 md:gap-6">
          <SwitchTheme />
          <Link
            to={'/register'}
            className="hidden md:flex h-12 w-44 rounded-2xl bg-indigo-600 border-black border text-white items-center px-3 font-medium text-sm justify-between"
          >
            Sign up <SvgIconArrowRight />
          </Link>
          {isMobMenuOpen ? (
            <button onClick={() => mobMenuClose()} className="md:hidden h-6 w-6 cursor-pointer">
              <SvgIconCross />
            </button>
          ) : (
            <button onClick={() => mobMenuOpen()} className="md:hidden cursor-pointer">
              <SvgIconMenuBurger />
            </button>
          )}
        </div>
      </header>
      {isMobMenuOpen && <MobMenu />}
    </>
  );
};
