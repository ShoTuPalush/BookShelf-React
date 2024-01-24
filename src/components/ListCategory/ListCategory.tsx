import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { featchBooks } from '../../redux/books/operations';
import { clearBook, setSelect } from '../../redux/books/slice';
import { selectCategory, selectChangeCategory } from '../../redux/books/selector';
import { AppDispatch } from '../../redux/store';

export const ListCategory = () => {
  const dispath = useDispatch<AppDispatch>();
  const categoryList = useSelector(selectCategory);
  const changeCategory = useSelector(selectChangeCategory);

  const handleCatagory = (value: string) => {
    dispath(setSelect(value));
    if (value === 'All categories') {
      dispath(clearBook());
      return;
    }
    dispath(featchBooks(value));
  };

  return (
    <>
      <div className="h-60 overflow-y-auto mx-5 md:mx-8 md:h-472 w-337 mb-10 md:mb-24  lg:mb-20 lg:mr-0">
        <ul className="flex gap-5 flex-col md:gap-7 h-60 md:h-472">
          <li
            className={
              changeCategory === 'All categories'
                ? 'uppercase font-bold text-[#4F2EE8] cursor-pointer inline-block md:text-base dark:text-[#EAC645]'
                : '  text-gray-500 cursor-pointer inline-block md:text-base dark:text-gray-400'
            }
            onClick={() => handleCatagory('All categories')}
          >
            All categories
          </li>
          {categoryList.map((category) => (
            <li key={nanoid()}>
              <p
                className={
                  changeCategory === category.list_name
                    ? 'uppercase font-bold text-blue-700 cursor-pointer inline-block md:text-base'
                    : ' text-gray-500 cursor-pointer inline-block md:text-base dark:text-gray-400'
                }
                onClick={() => handleCatagory(category.list_name)}
              >
                {category.list_name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
