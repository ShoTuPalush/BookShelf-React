import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { featchBook } from '../../redux/books/operations';
import { selectBook } from '../../redux/books/selector';
import { SvgIconCross } from '../SvgIcon/SvgIcon';
import amazon from './amazon-icon.png';
import applebook from './applebook-icon.png';
import { addSaveBook, removeSaveBook } from '../../redux/pagination/slice';
import { selectSaveBooks } from '../../redux/pagination/selector';
import { selectTheme } from '../../redux/locals/selector';
import { saveDBList } from '../../redux/auth/operations';

const customStyles = {
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(17, 17, 17, 0.40)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    borderRadius: '18px',
    background: '#FFF',
  },
};

Modal.setAppElement('#root');

interface IPropsBookModal {
  isModalOpen: boolean;
  modalClose: () => void;
  _id: string;
}

export const BookModal = ({ isModalOpen, modalClose, _id }: IPropsBookModal) => {
  const dispath = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (isModalOpen) {
      dispath(featchBook(_id));
    }
  }, [dispath, _id, isModalOpen]);

  const res = useSelector(selectBook);
  const saveBooks = useSelector(selectSaveBooks);
  const buttonSave = saveBooks.findIndex((book) => book._id === _id);

  const savedBook = () => {
    dispath(addSaveBook(res));
    dispath(saveDBList());
  };

  const savedBook2 = () => {
    dispath(removeSaveBook(res));
    dispath(saveDBList());
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          htmlOpenClassName={'no-scroll ' + theme}
          onAfterClose={() => (document.documentElement.className = '' + theme)}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Book Modal"
        >
          <div
            className="py-10 px-6 w-335 max-h-screen overflow-y-auto border-2 border-black bg-white rounded-[18px]
          md:w-579 md:px-10 dark:bg-[#202024] dark:border-white"
          >
            <button
              className="absolute right-0 top-3 flex items-center justify-center
              md:right-2 md:top-5"
              type="button"
              onClick={() => modalClose()}
            >
              <SvgIconCross />
            </button>
            <div className="md:flex md:gap-6 md:mb-10">
              <img
                className="h-408 w-287 rounded-lg mb-4
              md:w-192 md:h-281"
                src={res.book_image}
                alt={res.title}
              />
              <div>
                <h3 className="font-bold mb-1 text-base md:text-2xl md:mb-2 dark:text-white">{res.title}</h3>
                <h4 className="font-normal italic text-[#B4AFAF] text-xs mb-5 md:text-sm">{res.author}</h4>
                <p className="font-normal text-sm mb-4 dark:text-white">{res.description}</p>
                {Object.keys(res).length !== 0 && (
                  <div className="flex items-center gap-5 mb-11">
                    <a href={res.buy_links[0].url} target="_blank" rel="noopener noreferrer">
                      <img src={amazon} alt="amazon" className="dark:brightness-0 dark:invert" />
                    </a>
                    <a href={res.buy_links[1].url} target="_blank" rel="noopener noreferrer">
                      <img src={applebook} alt="applebook" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              {buttonSave === -1 ? (
                <button
                  onClick={() => savedBook()}
                  className="uppercase px-6 py-4 font-bold border-2 rounded-full border-[#4F2EE8] w-full dark:text-white"
                >
                  add to shopping list
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => savedBook2()}
                    className="uppercase px-6 py-4 font-bold border-2 rounded-full mb-2 border-[#4F2EE8] w-full dark:text-white"
                  >
                    remove to shopping list
                  </button>
                  <p className="text-xs text-center text-gray-700 md:w-80 ml-auto mr-auto dark:text-gray-400">
                    Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove
                    from the shopping list”.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
