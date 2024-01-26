import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selector';
import { Loader } from '../Loader/Loader';
import { selectIsLoading } from '../../redux/books/selector';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

export const SharedLayot = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <div className="md:container ">
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <ScrollToTop />
      {isRefreshing && <Loader />}
      {isLoading && <Loader />}
    </>
  );
};
