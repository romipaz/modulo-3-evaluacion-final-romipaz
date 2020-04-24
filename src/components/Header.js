import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/rmlogo.png'
import '../stylesheets/utils/_mixins.scss';
import '../stylesheets/utils/_variables.scss';
import '../stylesheets/layout/_Header.scss';


class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Link to="/"><img className="Header__logo" src={logo}></img></Link>
            </div>
        );
    }
}




export default Header;