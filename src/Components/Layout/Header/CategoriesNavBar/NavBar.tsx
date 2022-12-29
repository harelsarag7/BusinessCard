import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
                <NavLink to={"/createcard"}>Create Card</NavLink>
                <NavLink to={"/accessories"}>Accessories</NavLink>
                <NavLink to={"/tickets"}>Tickets</NavLink>
                {/* <NavLink to={"/blog"}>Blog</NavLink> */}
        </div>
    );
}

export default NavBar;
