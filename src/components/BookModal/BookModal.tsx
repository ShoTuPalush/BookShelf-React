import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { featchBook } from '../../redux/books/operations';
import { selectBook, selectSaveBooks } from '../../redux/books/selector';
import { SvgIconCross } from '../SvgIcon/SvgIcon';
import amazon from './amazon-icon.png';
import applebook from './applebook-icon.png';
import { addSaveBook, removeSaveBook } from '../../redux/books/slice';

const customStyles = {
  overplay: {
    position: 'fixed',
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
    border: '2px solid #111',
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

  useEffect(() => {
    if (isModalOpen) {
      dispath(featchBook(_id));
    }
  }, [dispath, _id, isModalOpen]);

  const res = useSelector(selectBook);
  const saveBooks = useSelector(selectSaveBooks);
  const buttonSave = saveBooks.findIndex((book) => book._id === _id);

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          htmlOpenClassName={'no-scroll'}
          onAfterClose={() => (document.documentElement.className = '')}
          onRequestClose={modalClose}
          style={customStyles}
          contentLabel="Book Modal"
        >
          <div
            className="py-10 px-6 w-335 
          md:w-579 md:px-10"
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
                <h3 className="font-bold mb-1 text-base md:text-2xl md:mb-2">{res.title}</h3>
                <h4 className="font-normal italic text-gray-400 text-xs mb-5 md:text-sm">{res.author}</h4>
                <p className="font-normal text-sm mb-4">{res.description}</p>
                {Object.keys(res).length !== 0 && (
                  <div className="flex items-center gap-5 mb-11">
                    <a href={res.buy_links[0].url} target="_blank" rel="noopener noreferrer">
                      <img src={amazon} alt="amazon" />
                    </a>
                    <a href={res.buy_links[1].url} target="_blank" rel="noopener noreferrer">
                      <img src={applebook} alt="applebook" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center md:w-full">
              {buttonSave === -1 ? (
                <button
                  onClick={() => dispath(addSaveBook(res))}
                  className="uppercase w-60 px-6 py-4 font-bold border-2 rounded-3xl border-blue-700 md:w-full "
                >
                  add to shopping list
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => dispath(removeSaveBook(res))}
                    className="uppercase  px-6 py-4 font-bold border-2 rounded-3xl mb-2 border-blue-700 md:w-full"
                  >
                    remove to shopping list
                  </button>
                  <p className="text-xs text-center ">
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
