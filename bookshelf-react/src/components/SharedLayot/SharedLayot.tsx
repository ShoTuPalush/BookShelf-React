import { Link, NavLink, Outlet } from "react-router-dom"

export const SharedLayot = () =>{
    return <>
        <header>
            <Link to={'/'}>logo </Link>
            <NavLink to={'/'}>Home </NavLink>
            <NavLink to={'/shoping-list'}>Shoping List </NavLink>
            <input type="checkbox" name="theme" id="theme" />
            <Link to={'/login'}>log in </Link>
            <Link to={'/register'}>sign up </Link>
        </header>
        <Outlet/>
    </>
}