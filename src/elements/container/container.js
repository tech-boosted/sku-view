import React from "react";
import './container.css';

var Container = (props) => {
    return (
        <div className="custom-container">
            <div className="custom-container-main">
                {props.children}
            </div>
        </div>
    )
}

export default Container;