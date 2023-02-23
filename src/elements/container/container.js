import React from "react";
import './container.css';

var Container = (props) => {
    return (
        <div className="custom-container">
            <div className="custom-container-main">
                <div className="custom-container-header">
                    <div className="custom-container-header-title">
                        {props.title}
                    </div>
                </div>
                <div className="custom-container-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Container;