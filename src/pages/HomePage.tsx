import { useSelector } from 'react-redux';
import { Books } from '../components/Books/Books';
import { ListCategory } from '../components/ListCategory/ListCategory';
import { TopBooks } from '../components/TopBooks/TopBooks';
import { selectChangeCategory } from '../redux/books/selector';

export default function HomePage() {
  const changeCategory = useSelector(selectChangeCategory);
  return (
    <>
      <ListCategory />

      {changeCategory === 'all categories' ? <TopBooks /> : <Books />}
    </>
  );
}
