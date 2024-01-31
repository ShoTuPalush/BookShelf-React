import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectFullCategory } from '../../redux/books/selector';
import { Category } from '../Category/Category';

export const ListCategory = () => {
  const categoryList = useSelector(selectFullCategory);
  return (
    <>
      <div className="h-60 overflow-y-auto mx-5 md:mx-8 md:h-472 w-337 mb-10 md:mb-24  lg:mb-20 lg:mr-0">
        <ul className="flex gap-5 flex-col md:gap-7 h-60 md:h-472">
          {categoryList.map((category) => (
            <li key={nanoid()}>
              <Category category={category} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
