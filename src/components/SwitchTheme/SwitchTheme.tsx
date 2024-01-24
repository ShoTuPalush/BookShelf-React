import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/locals/selector';
import { AppDispatch } from '../../redux/store';
import { toogleTheme } from '../../redux/locals/slice';

export const SwitchTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  return (
    <>
      <div>
        <span className="inline-block relative w-10 h-6">
          <label htmlFor="them-switch">
            <input className="opacity-0" id="them-switch" type="checkbox" onClick={() => dispatch(toogleTheme())} />
            <span className="absolute inset-x-0 inset-y-0 bg-gradient-to-b from-indigo-800 to-blue-500 rounded-3xl cursor-pointer">
              <span
                className={
                  theme === 'dark'
                    ? 'absolute h-5 w-5 right-0.5 bottom-0.5 bg-white rounded-3xl'
                    : 'absolute h-5 w-5 left-0.5 bottom-0.5 bg-white rounded-3xl'
                }
              ></span>
            </span>
          </label>
        </span>
      </div>
    </>
  );
};
