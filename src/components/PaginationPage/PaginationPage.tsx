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
          className="text-xl text-center pb-1 rounded-full w-9 h-9 border border-blue-600 text-white bg-blue-600 md:h-11 md:w-11"
        >
          {page}
        </button>
      ) : (
        <button
          onClick={() => dispatch(choosePage(page))}
          className="text-xl text-center pb-1 rounded-full w-9 h-9 border border-blue-600 text-black md:h-11 md:w-11"
        >
          {page}
        </button>
      )}
    </>
  );
};
