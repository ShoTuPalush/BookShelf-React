import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { logOut } from '../../redux/auth/operations';
import { SvgIconArrowRight } from '../SvgIcon/SvgIcon';
import clsx from 'clsx';

interface IPropsLogOutBtn {
  position: string;
}

export const LogOutBtn = ({ position }: IPropsLogOutBtn) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div className={clsx(position, 'transition-all absolute')}>
        <button
          onClick={() => dispatch(logOut())}
          className="flex h-12 w-44 rounded-2xl bg-white border-black border text-black items-center px-3 font-medium text-sm justify-between"
        >
          Log out <SvgIconArrowRight />
        </button>
      </div>
    </>
  );
};
