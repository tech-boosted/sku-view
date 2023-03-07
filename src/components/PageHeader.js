import React, { useEffect, useState } from 'react';
import linksData from './Menu';
import { useLocation } from 'react-router-dom';


const links = linksData.links;
const PageHeader = (props) => {
    const [pageNavigation, updatePageNavigation] = useState([]);
    const [pageTitle, changeTitle] = useState("Overview");
    const location = useLocation();

    var currentPath = window.location.pathname;
    // console.log("currentPath: ", currentPath)
    useEffect(() => {
        links.forEach((e, index) => {
            console.log()
            if (e.link !== undefined) {
                if (currentPath === e.link) {
                    changeTitle(e.name);
                    if (e.link === "/") {
                        updatePageNavigation([])
                    } else {
                        updatePageNavigation(<li className="is-active" key={index}><a href={e.link}>{e.name}</a></li>)
                    }
                }
            } else if (Array.isArray(e.subLinks)) {
                for (let i = 0; i < e.subLinks.length; i++) {
                    const link = e.subLinks[i].link;
                    if (currentPath === link) {
                        changeTitle(e.subLinks[i].name);
                        updatePageNavigation(<li className="is-active" key={index}><a href={link}>{e.subLinks[i].name}</a></li>)
                    }
                }
            }
        })
    }, [currentPath, location])

    return (
        <div className="columns">
            <div className="column">

                <div className="title is-4">
                    {pageTitle}
                </div>
                <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                    <ul>
                        <li key={"a"}><a href="/">Dashboard</a></li>
                        {pageNavigation}
                    </ul>
                </nav>
                {props.children}
            </div>
        </div>
    )
}

export default PageHeader;