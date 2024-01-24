import { useState } from 'react';
import { BookModal } from '../BookModal/BookModal';

interface IPropsBook {
  _id: string;
  book_image: string;
  title: string;
  author: string;
}

export const Book = ({ _id, book_image, title, author }: IPropsBook) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="mb-10 cursor-pointer
        
        "
        onClick={() => modalOpen()}
      >
        <div className="mb-3 rounded-lg relative after:rounded-b-lg after:w-335 md:after:w-218 lg:after:w-180 hover:after:content-['quick_view'] hover:after:bg-yellow-500 after:h-16 after:absolute after:uppercase after:text-center after:pt-5 after:bottom-0">
          <img
            className="w-335 h-485 rounded-lg
            md:w-218 md:h-316
            lg:w-180 lg:h-256
            
        "
            src={book_image}
            alt={title}
          />
        </div>
        <p className="uppercase font-bold truncate mb-1 dark:text-white">{title}</p>
        <p className="text-[#B4AFAF] text-xs mb-2">{author}</p>
      </div>
      <BookModal isModalOpen={isModalOpen} modalClose={modalClose} _id={_id} />
    </>
  );
};
