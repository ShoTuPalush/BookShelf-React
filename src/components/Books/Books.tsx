import { useSelector } from 'react-redux';
import { selectBooks, selectChangeCategory } from '../../redux/books/selector';
import { Book } from '../Book/Book';

export const Books = () => {
  const books = useSelector(selectBooks);
  const changeCategory = useSelector(selectChangeCategory);
  const splitCategory = changeCategory.split(' ');
  const lastWord = splitCategory[splitCategory.length - 1];
  const firstWord = splitCategory.filter((item) => item !== lastWord).join(' ');
  return (
    <>
      <div>
        <h2
          className="font-bold text-3xl mb-10 ml-5
          md:text-5xl md:ml-8"
        >
          {firstWord}
          <span className="text-blue-600"> {lastWord}</span>
        </h2>
        <ul
          className="mx-4 md:mx-8
                     md:flex md:gap-6 flex-wrap
                    "
        >
          {books.map((book) => (
            <li
              className="w-335 
                                  md:w-218 
                                  lg:w-180 "
            >
              <Book _id={book._id} book_image={book.book_image} title={book.title} author={book.author} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
