import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/locals/selector';
import { AppDispatch } from '../../redux/store';
import { toogleTheme } from '../../redux/locals/slice';
import clsx from 'clsx';

export const SwitchTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  return (
    <>
      <div>
        <span className="inline-block relative w-11 h-6">
          <label htmlFor="them-switch">
            <input className="opacity-0" id="them-switch" type="checkbox" onClick={() => dispatch(toogleTheme())} />
            <span
              className="absolute inset-x-0 inset-y-0 rounded-3xl cursor-pointer
            bg-gradient-to-b from-indigo-800 to-blue-500"
            >
              <span
                className={clsx(
                  'transition-all absolute h-5 w-5 left-0.5 bottom-0.5 bg-white rounded-3xl',
                  theme === 'dark' && 'translate-x-5',
                )}
              ></span>
            </span>
          </label>
        </span>
      </div>
    </>
  );
};
