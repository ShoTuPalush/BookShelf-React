import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectSortedTopBooks } from '../../redux/books/selector';
import { Book } from '../Book/Book';
import { AppDispatch } from '../../redux/store';
import { clearBook, setSelect } from '../../redux/books/slice';
import { featchBooks } from '../../redux/books/operations';

export const TopBooks = () => {
  const dispath = useDispatch<AppDispatch>();
  const topBooks = useSelector(selectSortedTopBooks);

  const handleCatagory = (value: string) => {
    dispath(setSelect(value));
    if (value === 'all categories') {
      dispath(clearBook());
      return;
    }
    dispath(featchBooks(value));
  };

  return (
    <>
      <div>
        <h2
          className="font-bold text-3xl mb-10 ml-5
        md:text-5xl md:ml-8"
        >
          Best Sellers <span className="text-blue-600">Books</span>
        </h2>
        {topBooks[0] && (
          <ul className="mx-4 md:mx-8">
            {topBooks.map((item) => (
              <li key={nanoid()}>
                <p className="uppercase text-gray-400 text-sm mb-4">{item.list_name}</p>

                <ul
                  className="[&>*:nth-child(1)]:block 
                  md:[&>*:nth-child(-n+3)]:block md:flex md:gap-6
                  lg:[&>*:nth-child(-n+5)]:block"
                >
                  {item.books.map((book) => (
                    <li
                      className="w-335 hidden
                                md:w-218 
                                lg:w-180 "
                    >
                      <Book _id={book._id} book_image={book.book_image} title={book.title} author={book.author} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row-reverse">
                  <button
                    onClick={() => handleCatagory(item.list_name)}
                    className="uppercase mb-10 py-3 px-4 border-2 rounded-3xl border-blue-700 w-32"
                  >
                    see more
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
