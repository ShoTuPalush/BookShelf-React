import { nanoid } from '@reduxjs/toolkit';
import { Book } from '../Book/Book';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { ITopBooks, clearBook, setSelect } from '../../redux/books/slice';
import { featchBooks } from '../../redux/books/operations';
import { useRef } from 'react';

interface IPropsBooksCategory {
  item: ITopBooks;
}

export const TopBooksCategory = ({ item }: IPropsBooksCategory) => {
  const dispatch = useDispatch<AppDispatch>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleCatagory = (value: string) => {
    dispatch(setSelect(value));
    if (value === 'All categories') {
      dispatch(clearBook());
      return;
    }
    dispatch(featchBooks(value));
    window.scrollTo({ top: titleRef.current?.offsetTop, behavior: 'smooth' });
  };

  return (
    <>
      <p ref={titleRef} className="uppercase text-[#B4AFAF] text-sm mb-4">
        {item.list_name}
      </p>
      <ul
        className="[&>*:nth-child(1)]:block 
                  md:[&>*:nth-child(-n+3)]:block md:flex md:gap-6
                  lg:[&>*:nth-child(-n+5)]:block"
      >
        {item.books.map((book) => (
          <li key={nanoid()} className="w-335 hidden md:w-218  lg:w-180 ">
            <Book book={book} />
          </li>
        ))}
      </ul>
      <div className="flex flex-row-reverse">
        <button
          onClick={() => handleCatagory(item.list_name)}
          className="uppercase w-32 transition-all mb-10 py-3 px-4 border-2 rounded-3xl 
                    border-[#4F2EE8] hover:bg-[#4F2EE8] dark:text-white"
        >
          see more
        </button>
      </div>
    </>
  );
};
