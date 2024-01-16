import { Link, NavLink, Outlet } from 'react-router-dom';

export const SharedLayot = () => {
  return (
    <>
      <header className="container h-16 flex items-center px-6 border border-black rounded-b-lg">
        <Link to={'/'} className="flex gap-2 font-medium mr-20">
          <svg viewBox="0 0 32 32" className="w-6 h-6">
            <path fill="#f6f6f6" d="M0 0l16.343 16.171 15.657 15.829v-32h-32z"></path>
            <path fill="#f6f6f6" d="M4.457 4.229l11.943 11.829 11.257 11.486h-23.2v-23.314z"></path>
            <path fill="#4f2ee8" d="M27.733 27.618l-11.943-11.829-11.257-11.486h23.2v23.314z"></path>
            <path fill="#4f2ee8" d="M9.257 9.029l13.6 13.6h-13.6v-13.6z"></path>
            <path fill="#f6f6f6" d="M9.257 9.029l13.6 13.6v-13.6h-13.6z"></path>
          </svg>
          Bookshelf
        </Link>
        <div className="flex">
          <NavLink to={'/'} className="font-bold text-sm mr-6 px-4 py-2 rounded-3xl bg-yellow-500 uppercase">
            home
          </NavLink>
          <NavLink
            to={'/shoping-list'}
            className="flex font-medium text-sm px-4 py-2 rounded-3xl bg-yellow-500 uppercase"
          >
            shoping list
            <svg viewBox="0 0 32 32" className="w-5 h-5 ml-1">
              <path d="M26.37 8.593h-4.444v-1.481c0-1.572-0.624-3.079-1.736-4.19s-2.619-1.736-4.19-1.736c-1.572 0-3.079 0.624-4.19 1.736s-1.736 2.619-1.736 4.19v1.481h-4.444c-0.393 0-0.77 0.156-1.048 0.434s-0.434 0.655-0.434 1.048v16.296c0 1.179 0.468 2.309 1.302 3.143s1.964 1.302 3.143 1.302h14.815c1.179 0 2.309-0.468 3.143-1.302s1.302-1.964 1.302-3.143v-16.296c0-0.393-0.156-0.77-0.434-1.048s-0.655-0.434-1.048-0.434zM13.036 7.111c0-0.786 0.312-1.539 0.868-2.095s1.309-0.868 2.095-0.868c0.786 0 1.539 0.312 2.095 0.868s0.868 1.309 0.868 2.095v1.481h-5.926v-1.481zM24.888 26.37c0 0.393-0.156 0.77-0.434 1.047s-0.655 0.434-1.048 0.434h-14.815c-0.393 0-0.77-0.156-1.048-0.434s-0.434-0.655-0.434-1.047v-14.815h2.963v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.048-0.434s0.434-0.655 0.434-1.048v-1.481h5.926v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.048-0.434s0.434-0.655 0.434-1.048v-1.481h2.963v14.815z"></path>
            </svg>
          </NavLink>
        </div>
        <input type="checkbox" name="theme" id="theme" />
        <Link to={'/login'}>log in </Link>
        <Link to={'/register'}>sign up </Link>
      </header>
      <Outlet />
    </>
  );
};
