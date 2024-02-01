import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './redux/store';
import { featchCategories, featchTopBooks } from './redux/books/operations';
import { refreshUser } from './redux/auth/operations';
import { initialTheme } from './redux/locals/slice';
import { selectIsRefreshing } from './redux/auth/selector';
import { RestrictedRoute } from './pages/RestrictedRoute';
import { SharedLayot } from './components/SharedLayot/SharedLayot';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopingListPage = lazy(() => import('./pages/ShopingListPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPages'));

export const App = () => {
  const dispath = useDispatch<AppDispatch>();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispath(featchCategories());
    dispath(featchTopBooks());
    dispath(refreshUser());
    dispath(initialTheme());
  }, [dispath]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayot />}>
            <Route index element={<HomePage />} />
            <Route path="/shoping-list" element={<ShopingListPage />} />
            <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
};
