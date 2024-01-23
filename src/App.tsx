import { Route, Routes } from 'react-router-dom';
import { SharedLayot } from './components/SharedLayot/SharedLayot';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPages';
import ShopingListPage from './pages/ShopingListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { featchCategories, featchTopBooks } from './redux/books/operations';
import { refreshUser } from './redux/auth/operations';
import { AppDispatch } from './redux/store';
import { RestrictedRoute } from './pages/RestrictedRoute';

export default function App() {
  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    dispath(featchCategories());
    dispath(featchTopBooks());
    dispath(refreshUser());
  }, [dispath]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route index element={<HomePage />} />
          <Route path="/shoping-list" element={<ShopingListPage />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
