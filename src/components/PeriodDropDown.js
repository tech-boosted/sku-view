import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCalendarBlank } from '@mdi/js';

const PeriodDropDown = () => {
    const [isActive, toggleActive] = useState("");
    var onDropdownClick = () => {
        if (isActive === "") {
            toggleActive("is-active")
        } else {
            toggleActive("")
        }
    }
    var onClickElseWhere = () => {
        toggleActive("")
    }
    return (
        <div className={"dropdown mb-4 " + isActive}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={onDropdownClick} onBlur={onClickElseWhere}>
                    <Icon path={mdiCalendarBlank} size={1} />
                    <span className='p-3'>Select Period</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    <a href="/" className="dropdown-item">
                        Yesterday
                    </a>
                    <a href="/" className="dropdown-item">
                        Last 7 Days
                    </a>
                    <a href="/" className="dropdown-item">
                        Last 28 Days
                    </a>
                    <a href="/" className="dropdown-item">
                        Last 90 Days
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                        Custom
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PeriodDropDown;