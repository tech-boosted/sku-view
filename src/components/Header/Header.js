import React from "react";
import user from '../../images/icons/user.png';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" >

                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end has-text-white">
                    <a className="navbar-item">
                        Dashboard
                    </a>

                    <a className="navbar-item">
                        My Channels
                    </a>

                    <div className="navbar-item">
                        Reports
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;