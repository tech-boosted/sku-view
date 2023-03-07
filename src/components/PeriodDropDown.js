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
        <div class={"dropdown mb-4 " + isActive}>
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={onDropdownClick} onBlur={onClickElseWhere}>
                    <Icon path={mdiCalendarBlank} size={1} />
                    <span className='p-3'>Select Period</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    <a href="/" class="dropdown-item">
                        Yesterday
                    </a>
                    <a href="/" class="dropdown-item">
                        Last 7 Days
                    </a>
                    <a href="/" class="dropdown-item">
                        Last 28 Days
                    </a>
                    <a href="/" class="dropdown-item">
                        Last 90 Days
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="/" class="dropdown-item">
                        Custom
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PeriodDropDown;