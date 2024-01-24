import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const SharedLayot = () => {
  return (
    <>
      <div className="md:container ">
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
