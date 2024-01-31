import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectSortedTopBooks } from '../../redux/books/selector';
import { TitleBooks } from '../TitleBooks/TitleBooks';
import { TopBooksCategory } from '../TopBooksCategory/TopBooksCategory';

export const TopBooks = () => {
  const topBooks = useSelector(selectSortedTopBooks);

  return (
    <>
      <div>
        <TitleBooks />
        {topBooks[0] && (
          <ul className="mx-5 md:mx-8">
            {topBooks.map((item) => (
              <li key={nanoid()}>
                <TopBooksCategory item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
