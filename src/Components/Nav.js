import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

function Nav (props) {
    const [shrinkNav, setShrinkNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
        if(window.scrollY > 30) {
            setShrinkNav(true);
        }else {
            setShrinkNav(false);
        }
    })}, [])
    return (
        <nav>
            <ul id="nav" className={shrinkNav ? "shaded" : "nav"}>
                <li><NavLink to='/ma-landing-page' exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to='/ma-landing-page/works' activeClassName="selected">Works</NavLink></li>
                <li><NavLink to='/ma-landing-page/aboot' activeClassName="selected">Aboot</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;