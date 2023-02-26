import React, { useEffect, useState } from 'react';
import linksData from './Links.json';

// const links = linksData.links;
const Main = (props) => {
/*     const [pageTitle, changeTitle] = useState("Overview");

    var currentPath = window.location.pathname;
    console.log("currentPath: ", currentPath)
    useEffect(() => {
        links.forEach((e) => {
            if (e.link !== undefined) {
                if (currentPath === e.link) {
                    changeTitle(e.name);
                }
            }
        })
    }, [props.children]) */

    return (
        <div className="colmns">
            <div className="column">
                <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                    <ul>
                        <li className="is-active"><a href="#" aria-current="page">Dashboard</a></li>
                    </ul>
                </nav>
                <div className="title">
                    {props.pageTitle}
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Main;