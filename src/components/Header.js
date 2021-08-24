import React from 'react';
import "./Header.css"

function Header() {
    return (
        <nav className="Header">
            <span><a href="/" title="Homepage">Catarina Ramos</a></span>
            <ul>
                <li><a href="/" title="Homepage">Home</a></li>
                <li><a href="/about" title="About me">About</a></li>
                <li><a href="/work" title="Work Portfolio">Work</a></li>
                <li><a href="/contact" title="Contact me">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header
