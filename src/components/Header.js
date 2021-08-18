import React from 'react';
import "./Header.css"

function Header() {
    return (
        <nav className="Header">
            <span>Catarina Ramos</span>
            <ul>
                <li><a href="/" title="Homepage">Home</a></li>
                <li><a href="/" title="About me">About</a></li>
                <li><a href="/" title="Work Portfolio">Work</a></li>
                <li><a href="/" title="Contect me">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header
