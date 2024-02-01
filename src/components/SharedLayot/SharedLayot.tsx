import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/books/selector';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { Suspense } from 'react';

export const SharedLayot = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <div className="md:container ">
        <Header />
      </div>
      <main className="container">
        <Suspense>
          {error === null ? (
            <Outlet />
          ) : (
            <div className="text-center">
              <b className="font-black text-7xl dark:text-white">{error}</b>
              <p className="font-bold text-3xl dark:text-gray-400">Please, try later...</p>
            </div>
          )}
        </Suspense>
      </main>
      <ScrollToTop />
      {isLoading && <Loader />}
    </>
  );
};
