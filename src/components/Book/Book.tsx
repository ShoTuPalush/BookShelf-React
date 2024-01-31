import { useState } from 'react';
import { BookModal } from '../BookModal/BookModal';
import clsx from 'clsx';
import { IBook } from '../../redux/books/slice';

interface IPropsBook {
  book: IBook;
}

export const Book = ({ book }: IPropsBook) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => {
    setIsModalOpen(true);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="mb-10 cursor-pointer" onClick={() => modalOpen()}>
        <div
          className={clsx(
            'overflow-hidden mb-3 rounded-lg relative',
            'after:transition-all after:duration-500 after:rounded-b-lg after:w-335 md:after:w-218 lg:after:w-180',
            'after:h-16 after:absolute after:uppercase after:text-center after:pt-5 after:-bottom-16',
            'hover:after:content-["quick_view"] hover:after:bg-yellow-500  hover:after:-translate-y-16',
          )}
        >
          <img
            className="w-335 h-485 rounded-lg
            md:w-218 md:h-316
            lg:w-180 lg:h-256
        "
            src={book.book_image}
            alt={book.title}
          />
        </div>
        <p className="uppercase font-bold truncate mb-1 dark:text-white">{book.title}</p>
        <p className="text-[#B4AFAF] text-xs mb-2">{book.author}</p>
      </div>
      <BookModal isModalOpen={isModalOpen} modalClose={modalClose} _id={book._id} />
    </>
  );
};
