import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectSortedTopBooks } from '../../redux/books/selector';

export const TopBooks = () => {
  const topBooks = useSelector(selectSortedTopBooks);

  return (
    <>
      {topBooks[0] && (
        <ul>
          {topBooks.map((item) => (
            <li key={nanoid()}>
              <p>{item.list_name}</p>
              <ul>
                {item.books.map((book) => (
                  <li>
                    <p>{book.title}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
