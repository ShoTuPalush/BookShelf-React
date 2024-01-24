import { useDispatch, useSelector } from 'react-redux';
import { selectMaxPage, selectPage, selectSaveBooks } from '../../redux/pagination/selector';
import { AppDispatch } from '../../redux/store';
import { decrementPage, firstPage, incrementPage, lastPage } from '../../redux/pagination/slice';
import { PaginationPage } from '../PaginationPage/PaginationPage';

export const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const saveBook = useSelector(selectSaveBooks);
  const maxPage = useSelector(selectMaxPage);
  const activePage = useSelector(selectPage);

  return (
    <>
      {saveBook.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => dispatch(firstPage())}
            className="mr-1 text-xl text-center pb-1 rounded-full w-9 h-9 bg-[#EAC645] border-black border text-black md:h-11 md:w-11 md:mr-2"
          >
            {'<<'}
          </button>
          <button
            onClick={() => dispatch(decrementPage())}
            className="text-xl text-center pb-1 pr-1 rounded-full w-9 h-9 bg-[#EAC645] border-black border text-black md:h-11 md:w-11"
          >
            {'<'}
          </button>
          <div className="ml-3.5 mr-3.5 flex gap-2 md:ml-6 md:mr-6 md:gap-2.5">
            {maxPage.map((page) => (
              <PaginationPage page={page} activePage={activePage} />
            ))}
          </div>
          <button
            onClick={() => dispatch(incrementPage())}
            className="mr-1 text-xl text-center pb-1 rounded-full w-9 h-9 bg-[#EAC645] border-black border text-black md:h-11 md:w-11 md:mr-2"
          >
            {'>'}
          </button>
          <button
            onClick={() => dispatch(lastPage())}
            className="text-xl text-center pb-1 rounded-full w-9 h-9 bg-[#EAC645] border-black border text-black md:h-11 md:w-11"
          >
            {'>>'}
          </button>
        </div>
      )}
    </>
  );
};
