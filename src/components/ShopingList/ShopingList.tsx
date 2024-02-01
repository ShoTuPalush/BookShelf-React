import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectPaginBooks } from '../../redux/pagination/selector';
import { ShopingListItem } from '../ShopingListItem/ShopingListItem';

export const ShopingList = () => {
  const saveBooks = useSelector(selectPaginBooks);

  return (
    <>
      <ul>
        {saveBooks.map((book) => (
          <li
            key={nanoid()}
            className="relative mx-4 mb-5 rounded-2xl p-3 border-2 border-indigo-400 md:p-6 md:mx-8 lg:ml-10 lg:mr-6 dark:bg-black"
          >
            <ShopingListItem book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};
