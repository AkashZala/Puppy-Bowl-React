import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div id="nav">
            <Link to='/' className={pathname === '/' ? 'selected' : ''}>Home</Link>
            <Link to='/players' className={pathname.includes('/players') ? 'selected' : ''}>Players</Link>
        </div>
    );
}

export default Nav;