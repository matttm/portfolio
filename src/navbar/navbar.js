import React from 'react';

export default class Navbar  extends React.Component {
    render() {
        return (
            <header>
                <ul>
                    <li><a id="home" href="#">Matt Maloney</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
        );
    }
}
