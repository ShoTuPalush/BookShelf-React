import { useSelector } from 'react-redux';
import { Books } from '../components/Books/Books';
import { ListCategory } from '../components/ListCategory/ListCategory';
import { TopBooks } from '../components/TopBooks/TopBooks';
import { selectChangeCategory } from '../redux/books/selector';
import { SupportUkraine } from '../components/SupportUkraine/SupportUkraine';

export default function HomePage() {
  const changeCategory = useSelector(selectChangeCategory);
  return (
    <>
      <div className="lg:flex">
        <div className="md:flex lg:block">
          <ListCategory />
          <SupportUkraine />
        </div>
        {changeCategory === 'All categories' ? <TopBooks /> : <Books />}
      </div>
    </>
  );
}
