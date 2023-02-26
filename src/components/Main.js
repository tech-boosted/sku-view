import React, { useEffect, useState } from 'react';


const Main = (props) => {
    const [pageTitle, changeTitle] = useState("Overview");
    
    var currentPath = window.location.pathname;
    useEffect(() => {
        if (currentPath === "/") {
            changeTitle("Overview");
        }
    }, [])

    return (
        <div className="colmns">
            <div className="column">
                <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                    <ul>
                        <li className="is-active"><a href="#" aria-current="page">Dashboard</a></li>
                    </ul>
                </nav>
                <div className="title">
                    {pageTitle}
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Main;