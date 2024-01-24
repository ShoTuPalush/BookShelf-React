import { Link } from 'react-router-dom';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { SvgIconArrowDown, SvgIconArrowRight, SvgIconCross, SvgIconMenuBurger, SvgIconUser } from '../SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';
import { useState } from 'react';
import { MobMenu } from '../MobMenu/MobMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/locals/selector';
import { selectIsLeggenIn, selectUser } from '../../redux/auth/selector';
import { AppDispatch } from '../../redux/store';
import { logOut } from '../../redux/auth/operations';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const theme = useSelector(selectTheme);
  const isLoggenIn = useSelector(selectIsLeggenIn);
  const user = useSelector(selectUser);
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
      <header className="px-5 bg-white md:px-6 mb-10 h-16 flex items-center justify-between border-t-0 border-2 border-black rounded-b-lg relative z-20 dark:bg-black dark:border-white">
        <Navigation />
        <div className="flex items-center gap-4 md:gap-6">
          <SwitchTheme />
          {isLoggenIn ? (
            <div
              onClick={() => setIsLogOut(!isLogOut)}
              className="hidden relative md:flex h-12 w-44 rounded-full bg-[#4F2EE8] border-black border text-white items-center px-3 font-medium text-sm justify-between"
            >
              <div className="bg-white absolute rounded-full w-9 h-9 flex items-center justify-center">
                <SvgIconUser />
              </div>
              <p className="ml-10 font-bold text-xl">{user.name}</p>
              <div className="mr-2 mb-1">
                <SvgIconArrowDown />
              </div>
              {isLogOut && (
                <button
                  onClick={() => dispatch(logOut())}
                  className="absolute top-11 left-0 hidden md:flex h-12 w-44 rounded-2xl bg-white border-black border text-black items-center px-3 font-medium text-sm justify-between"
                >
                  Log out <SvgIconArrowRight />
                </button>
              )}
            </div>
          ) : (
            <Link
              to={'/register'}
              className="hidden md:flex h-12 w-44 rounded-2xl bg-[#4F2EE8] border-black border text-white items-center px-3 font-medium text-sm justify-between"
            >
              Sign up <SvgIconArrowRight />
            </Link>
          )}

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
