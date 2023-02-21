import React from 'react';
import { Link } from "react-router-dom";

import sidebarData from './sidebar.json';

import './SideBar.css';

const renderLinks = () => {
    var arr = [];
    sidebarData.sidebarOptions.map((e,i) => {
        arr.push(
            <div className="sidebar-item has-text-white" key={i}>
                <Link to={e.link}>
                    {e.name}
                </Link>
            </div>
        )
    })
    return arr;
}

const SideBar = () => {
    return (
        <div className='sidebar-root bg-color-head has-text-white'>
            <div className="sidebar-main bg-color-head">
                {renderLinks()}
            </div>
        </div>
    )
}

export default SideBar;