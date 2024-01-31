import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectChangeCategory } from '../../redux/books/selector';
import { ICategory, setSelect } from '../../redux/books/slice';
import { featchBooks } from '../../redux/books/operations';

interface IPropCategory {
  category: ICategory;
}

export const Category = ({ category }: IPropCategory) => {
  const dispatch = useDispatch<AppDispatch>();
  const changeCategory = useSelector(selectChangeCategory);

  const handleCatagory = (value: string) => {
    dispatch(setSelect(value));
    dispatch(featchBooks(value));
  };

  return (
    <>
      <p
        className={clsx(
          'transition-all cursor-pointer inline-block md:text-base',
          'hover:uppercase hover:font-bold hover:text-[#4F2EE8] dark:hover:text-[#EAC645]',
          changeCategory === category.list_name
            ? 'uppercase font-bold text-blue-700  dark:text-[#EAC645]'
            : 'text-gray-500 dark:text-gray-400',
        )}
        onClick={() => handleCatagory(category.list_name)}
      >
        {category.list_name}
      </p>
    </>
  );
};
