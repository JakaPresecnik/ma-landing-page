import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <ul id="nav" className="nav">
                <li><NavLink to='/' exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to='/works' activeClassName="selected">Works</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;