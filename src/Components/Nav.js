import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <ul id="nav" className="nav">
                <li><NavLink to='/ma-landing-page' exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to='/ma-landing-page/works' activeClassName="selected">Works</NavLink></li>
                <li><NavLink to='/ma-landing-page/aboot' activeClassName="selected">Aboot</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;