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
                <li><NavLink to='/' exact activeClassName="selected">Home</NavLink></li>
                <li><NavLink to='/aboot' activeClassName="selected">Aboot</NavLink></li>
                <li><NavLink to='/works' activeClassName="selected">Works</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;