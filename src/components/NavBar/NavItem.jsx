import { Link } from "react-router-dom";

const NavItem = ( { href, children } ) => {
    
    return (
        <li className="nav-item">
            <Link to={href} className="nav-link">{ children }</Link>
        </li>
    )
};

export default NavItem;