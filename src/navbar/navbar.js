import React from 'react';
import './navbar.css';

export default class Navbar  extends React.Component {
    render() {
        return (
            <header id="navbar">
                <nav>
                    <ul>
                        <li><a id="home" href="#">Matt Maloney</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
