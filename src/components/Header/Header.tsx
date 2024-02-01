import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/locals/selector';
import { Navigation } from '../Navigation/Navigation';
import { MobMenu } from '../MobMenu/MobMenu';
import { Logo } from '../Logo/Logo';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { UserBar } from '../UserBar/UserBar';
import { SvgIconCross, SvgIconMenuBurger } from '../SvgIcon/SvgIcon';

export const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const theme = useSelector(selectTheme);
  const mobMenuOpen = () => {
    document.documentElement.className = 'no-scroll ' + theme;
    setIsMobMenuOpen(true);
  };

  const mobMenuClose = () => {
    document.documentElement.className = '' + theme;
    setIsMobMenuOpen(false);
  };
  return (
    <>
      <header
        className="px-5 md:px-6 mb-10 h-16 rounded-b-lg relative z-20 border-t-0 border-2 border-black 
      flex items-center justify-between bg-white dark:bg-black dark:border-white"
      >
        <div className="flex items-center">
          <Logo />
          <Navigation display="flex hidden md:flex" color="" />
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <SwitchTheme />
          <UserBar />

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
