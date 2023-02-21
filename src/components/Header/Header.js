import React from "react";
import user from '../../images/icons/user.png';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-root bg-color-head has-text-white	">

            <div className="header-main container has-text-white">
                <div className="header-logo-section">
                    {/* <img 
                        className="header-logo"
                        alt=""
                        src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" /> */}
                </div>
                <div className="header-nav-section">
                    <div className="header-nav-item">
                        Dashboard
                    </div>

                    <div className="header-nav-item">
                        My Channels
                    </div>

                    <div className="header-nav-item">
                        Reports
                    </div>
                </div>
                <div className="header-info-section">
                    <img 
                        className="header-info-user"
                        alt=""
                        src={user}
                    />
                </div>
            </div>
            {/* <nav className="navbar" role="navigation" aria-label="main navigation">
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
            </nav> */}
        </div>
    )
}

export default Header;