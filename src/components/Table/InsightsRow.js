import React, { useState } from 'react';

const InsightsRow = ({ columns, data }) => {

    var name = data["name"]; //string
    var total = data["total"]; // array
    var platform = data["platform"]; // array

    var columnLength = columns.length;

    const [displayPlatform, togglePlatform] = useState("is-hidden");
    const [displayCampaign, toggleCampaign] = useState("is-hidden");

    const onClickPlatformRow = (e, index) => {
        if (displayPlatform === "is-hidden") {
            togglePlatform("")
        } else {
            togglePlatform("is-hidden")
            toggleCampaign("is-hidden")
        }
    }
    const onClickCampaignRow = (e, index) => {
        if (displayCampaign === "is-hidden") {
            toggleCampaign("")
        } else {
            toggleCampaign("is-hidden")
        }
    }


    const renderSkus = () => {
        var arr = [];
        arr.push(
            <td key={100}>
                <button onClick={(e, index) => onClickPlatformRow(e, index)}>
                    {name}
                </button>
            </td>
        )
        for (let i = 0; i < total.length; i++) {
            arr.push(
                <td key={i}>{total[i]}</td>
            )
        }
        return arr
    }
    const renderPlatforms = (platform) => {
        var name = platform.name;
        var data = platform.data;
        var arr = [];
        arr.push(
            <td key={101}>
                <button onClick={(e, index) => onClickCampaignRow(e, index)}>
                    {name}
                </button>
            </td>
        )
        for (let i = 0; i < data.length; i++) {
            arr.push(
                <td key={i}>{data[i]}</td>
            )
        }
        return arr
    }
    const renderCampaigns = () => {
        var arr = [];
        arr.push(
            <td key={0}>

            </td>
        )
        for (let i = 1; i < columnLength; i++) {
            arr.push(
                <td key={i}>123</td>
            )
        }
        return arr
    }
    const renderPlatformRows = () => {
        var arr = []
        for (let i = 0; i < platform.length; i++) {
            arr.push(
                <tr className={"platform-table " + displayPlatform}>
                    {renderPlatforms(platform[i])}
                </tr>
            )
        }
        return arr
    }
    return (
        <>
            <tr className='root-table'>
                {renderSkus()}
            </tr>
            {renderPlatformRows()}
            {/* <tr className={"campaign-table " + displayCampaign}>
                {renderCampaigns()}
            </tr> */}
        </>
    )
}

export default InsightsRow;