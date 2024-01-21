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
      <div className="mb-10" onClick={() => modalOpen()}>
        <img
          className="mb-3 w-335 h-485
            md:w-218 md:h-316
            lg:w-180 lg:h-256
        "
          src={book_image}
          alt={title}
        />
        <p className="uppercase font-bold mb-1">{title}</p>
        <p className="text-gray-400 text-xs mb-2">{author}</p>
      </div>
      <BookModal isModalOpen={isModalOpen} modalClose={modalClose} _id={_id} />
    </>
  );
};
