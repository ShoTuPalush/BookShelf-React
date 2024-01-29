import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectSortedTopBooks } from '../../redux/books/selector';
import { Book } from '../Book/Book';
import { AppDispatch } from '../../redux/store';
import { clearBook, setSelect } from '../../redux/books/slice';
import { featchBooks } from '../../redux/books/operations';
import { useRef } from 'react';

export const TopBooks = () => {
  const dispath = useDispatch<AppDispatch>();
  const topBooks = useSelector(selectSortedTopBooks);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleCatagory = (value: string) => {
    dispath(setSelect(value));
    if (value === 'All categories') {
      dispath(clearBook());
      return;
    }
    dispath(featchBooks(value));
    window.scrollTo({ top: titleRef.current?.offsetTop, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <h2
          className="font-bold text-3xl mb-10 ml-5
        md:text-5xl md:ml-8 dark:text-white"
          ref={titleRef}
        >
          Best Sellers <span className="text-[#4F2EE8]">Books</span>
        </h2>
        {topBooks[0] && (
          <ul className="mx-5 md:mx-8">
            {topBooks.map((item) => (
              <li key={nanoid()}>
                <p className="uppercase text-[#B4AFAF] text-sm mb-4">{item.list_name}</p>

                <ul
                  className="[&>*:nth-child(1)]:block 
                  md:[&>*:nth-child(-n+3)]:block md:flex md:gap-6
                  lg:[&>*:nth-child(-n+5)]:block"
                >
                  {item.books.map((book) => (
                    <li
                      key={nanoid()}
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
                    className="uppercase hover:bg-[#4F2EE8] transition-all mb-10 py-3 px-4 border-2 rounded-3xl border-[#4F2EE8] w-32 dark:text-white"
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
