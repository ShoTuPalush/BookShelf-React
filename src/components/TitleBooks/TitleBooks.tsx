import { useSelector } from 'react-redux';
import { selectSplitCategory } from '../../redux/books/selector';

export const TitleBooks = () => {
  const category = useSelector(selectSplitCategory);
  return (
    <>
      <h2 className="font-bold text-3xl mb-10 ml-5 md:text-5xl md:ml-8 dark:text-white">
        {category[0]}
        <span className="text-[#4F2EE8]"> {category[1]}</span>
      </h2>
    </>
  );
};
