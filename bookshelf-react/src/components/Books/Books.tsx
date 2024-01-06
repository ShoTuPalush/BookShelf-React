import { useDispatch, useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/selector';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { featchSaveBook } from '../../redux/books/operations';

export const Books = () => {
  const dispath = useDispatch<ThunkDispatch<any, any, any>>();
  const books = useSelector(selectBooks);
  return (
    <>
      <ul>
        {books.map((book) => (
          <li className="mx-10">
            <p>{book.title}</p>
            <button onClick={() => dispath(featchSaveBook(book._id))}>save</button>
          </li>
        ))}
      </ul>
    </>
  );
};
