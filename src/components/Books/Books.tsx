import { useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/selector';
import { Book } from '../Book/Book';
import { TitleBooks } from '../TitleBooks/TitleBooks';
import { nanoid } from '@reduxjs/toolkit';

export const Books = () => {
  const books = useSelector(selectBooks);
  return (
    <>
      <div>
        <TitleBooks />
        <ul className="mx-5 md:mx-8 md:flex md:gap-6 flex-wrap">
          {books.map((book) => (
            <li key={nanoid()} className="w-335 md:w-218 lg:w-180 ">
              <Book book={book} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
