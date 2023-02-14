import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (

            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/">Customers</Link></li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><Link to="/">Team Settings</Link></li>
                    <li>
                        <Link to="/" className="is-active">Manage Your Team</Link>
                        <ul>
                            <li><Link to="/">Members</Link></li>
                            <li><Link to="/">Plugins</Link></li>
                            <li><Link to="/">Add a member</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Invitations</Link></li>
                    <li><Link to="/">Cloud Storage Environment Settings</Link></li>
                    <li><Link to="/">Authentication</Link></li>
                </ul>
                <p className="menu-label">
                    Transactions
                </p>
                <ul className="menu-list">
                    <li><Link to="/">Payments</Link></li>
                    <li><Link to="/">Transfers</Link></li>
                    <li><Link to="/">Balance</Link></li>
                </ul>
            </aside>

        );
    }
}

export default SideBar;