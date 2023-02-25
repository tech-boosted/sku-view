import React from "react";

var Container = (props) => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        {props.title}
                    </div>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Container;