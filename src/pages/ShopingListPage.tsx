import { useSelector } from 'react-redux';
import { EmptyShopingList } from '../components/EmptyShopingList/EmptyShopingList';
import { ShopingList } from '../components/ShopingList/ShopingList';
import { SupportUkraine } from '../components/SupportUkraine/SupportUkraine';
import { Pagination } from '../components/Pagination/Pagination';
import { selectSaveBooks } from '../redux/pagination/selector';

export default function ShopingListPage() {
  const saveBooks = useSelector(selectSaveBooks);
  return (
    <>
      <div className="lg:flex ">
        <div className="hidden lg:block">
          <SupportUkraine />
        </div>
        <div className="grow">
          <h2
            className="font-bold text-3xl mb-10 ml-5
              md:text-5xl md:ml-8 dark:text-white"
          >
            Shoping <span className="text-[#4F2EE8]">List</span>
          </h2>
          {saveBooks.length === 0 ? <EmptyShopingList /> : <ShopingList />}
          <Pagination />
        </div>
      </div>
    </>
  );
}
