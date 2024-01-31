import { useSelector } from 'react-redux';
import { selectMaxPage, selectSaveBooks } from '../../redux/pagination/selector';
import { PaginationPage } from '../PaginationPage/PaginationPage';

export const Pagination = () => {
  const saveBook = useSelector(selectSaveBooks);
  const maxPage = useSelector(selectMaxPage);

  return (
    <>
      {saveBook.length > 3 && (
        <div
          className="flex justify-center gap-2 md:gap-2.5 
        [&>*:nth-child(2)]:mr-3 [&>*:nth-last-child(2)]:ml-3"
        >
          {maxPage.map((page) => (
            <PaginationPage page={page} />
          ))}
        </div>
      )}
    </>
  );
};
