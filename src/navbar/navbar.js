import React from 'react';
import './navbar.css';

export default class Navbar  extends React.Component {
    render() {
        return (
            <header id="navbar">
                <nav>
                    <h1><a id="home" href="#">Matt Maloney</a></h1>
                    <ul>

                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
