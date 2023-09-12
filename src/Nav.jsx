import { Link } from "react-router-dom";
import PuppyList from "./PuppyList";

const Nav = () => {
    return(
        <div id="nav">
            <Link to='/'>Home</Link>
            <Link to='/players'>Players</Link>
        </div>
    );
}

export default Nav;