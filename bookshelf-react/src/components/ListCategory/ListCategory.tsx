import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch, nanoid } from '@reduxjs/toolkit';
import { featchBooks } from '../../redux/books/operations';
import { clearBook, setSelect } from '../../redux/books/slice';
import { selectCategory } from '../../redux/books/selector';

export const ListCategory = () => {
  const dispath = useDispatch<ThunkDispatch<any, any, any>>();
  const categoryList = useSelector(selectCategory);

  const handleCatagory = (value: string) => {
    dispath(setSelect(value));
    if (value === 'all categories') {
      dispath(clearBook());
      return;
    }
    dispath(featchBooks(value));
  };

  return (
    <>
      <p
        className="text-2xl mx-5 uppercase text-blue-700 cursor-pointer inline-block"
        onClick={() => handleCatagory('all categories')}
      >
        all categories
      </p>
      <ul>
        {categoryList.map((category) => (
          <li key={nanoid()}>
            <p className="cursor-pointer inline-block" onClick={() => handleCatagory(category.list_name)}>
              {category.list_name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
