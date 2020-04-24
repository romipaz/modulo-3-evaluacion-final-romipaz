import React from 'react';
import logo from '../images/rmlogo.png'
import '../stylesheets/layout/_Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <img className="Header__logo"src={logo}></img>
            </div>
        );
    }
}




export default Header;