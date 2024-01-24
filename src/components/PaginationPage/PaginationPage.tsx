import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { choosePage } from '../../redux/pagination/slice';

interface IPage {
  page: number;
  activePage: number;
}

export const PaginationPage = ({ page, activePage }: IPage) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {activePage === page ? (
        <button
          onClick={() => dispatch(choosePage(page))}
          className="text-xl text-center pb-1 rounded-full w-9 h-9 border border-black text-white bg-black md:h-11 md:w-11 dark:border-white dark:bg-white dark:text-black"
        >
          {page}
        </button>
      ) : (
        <button
          onClick={() => dispatch(choosePage(page))}
          className="text-xl text-center pb-1 rounded-full w-9 h-9 border border-black text-black md:h-11 md:w-11 dark:border-white dark:text-white"
        >
          {page}
        </button>
      )}
    </>
  );
};
