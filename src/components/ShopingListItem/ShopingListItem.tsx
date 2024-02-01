import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { removeSaveBook } from '../../redux/pagination/slice';
import { saveDBList } from '../../redux/auth/operations';
import { IBook } from '../../redux/books/slice';
import { SvgIconTrash } from '../SvgIcon/SvgIcon';
import amazon from '../../images/amazon-icon.png';
import applebook from '../../images/applebook-icon.png';

interface IPropsShopingListItem {
  book: IBook;
}

export const ShopingListItem = ({ book }: IPropsShopingListItem) => {
  const dispath = useDispatch<AppDispatch>();
  const removedSaveBook = (book: any) => {
    dispath(removeSaveBook(book));
    dispath(saveDBList());
  };
  return (
    <>
      <button
        className="absolute right-4 top-4 h-7 w-7 rounded-full bg-[#4F2EE8] flex items-center justify-center
               md:h-9 md:w-9"
        type="button"
        onClick={() => removedSaveBook(book)}
      >
        <SvgIconTrash />
      </button>
      <div className="flex gap-3 md:gap-6">
        <img
          className="h-36 w-100 rounded-lg
              md:h-40 md:w-28"
          src={book.book_image}
          alt={book.title}
        />
        <div>
          <h3 className="font-bold w-40 truncate mb-1 text-base md:w-full md:text-base md:mb-2 dark:text-white">
            {book.title}
          </h3>
          <h4 className="font-normal truncate text-[#B4AFAF] text-xs mb-2 md:mb-4 md:text-sm">{book.list_name}</h4>
          <p className="w-48 h-16 font-normal line-clamp-3 text-sm mb-2 md:w-full dark:text-white">
            {book.description}
          </p>
          <div className="flex justify-between">
            <p className="font-normal w-40 truncate italic text-[#B4AFAF] text-xs md:w-full md:text-sm">
              {book.author}
            </p>
            {Object.keys(book).length !== 0 && (
              <div className="flex items-end gap-2 absolute bottom-4 right-4 md:gap-4">
                <a href={book.buy_links[0].url} target="_blank" rel="noopener noreferrer">
                  <img src={amazon} alt="amazon" className="h-3 md:h-5 dark:brightness-0 dark:invert" />
                </a>
                <a href={book.buy_links[1].url} target="_blank" rel="noopener noreferrer">
                  <img src={applebook} alt="applebook" className="h-4 md:h-7" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
