import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { choosePage } from '../../redux/pagination/slice';
import clsx from 'clsx';
import { selectPage } from '../../redux/pagination/selector';

interface IPropPage {
  page: number | string;
}

export const PaginationPage = ({ page }: IPropPage) => {
  const dispatch = useDispatch<AppDispatch>();
  const activePage = useSelector(selectPage);
  return (
    <>
      <button
        onClick={() => dispatch(choosePage(page))}
        className={clsx(
          'transition-all text-xl text-center pb-1 rounded-full w-9 h-9 border border-black md:h-11 md:w-11 dark:border-white',
          activePage === page
            ? 'text-white bg-black  dark:bg-white dark:text-black'
            : ' text-black  dark:text-white hover:text-white hover:bg-blue-700',
          typeof page !== 'number' && 'bg-[#EAC645]',
        )}
      >
        {page}
      </button>
    </>
  );
};
