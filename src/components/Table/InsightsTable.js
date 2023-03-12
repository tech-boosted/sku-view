import React from 'react';
import InsightsRow from './InsightsRow';
import data from './data';

const InsightsTable = ({ columns, customClass }) => {

    const renderHeaders = () => {
        var arr = [];
        columns.forEach((col, index) => {
            arr.push(
                <th key={index}>{col}</th>
            )
        });
        return arr;
    }

    // const renderRows = () => {
    //     var arr = [];
    //     for (let i = 0; i < 6; i++) {
    //         arr.push(
    //             <>
    //                 <TableRowExpandable key={i} columns={columns} columnLength={columnLength} toggleRow={toggleRow} />
    //             </>
    //         )
    //     }
    //     return arr;
    // }
    return (
        <table className={'table is-fullwidth is-hoverable ' + customClass}>
            <thead>
                <tr>
                    {renderHeaders()}
                </tr>
            </thead>
            <tbody>
                <InsightsRow columns={columns} data={data[0]} />
                <InsightsRow columns={columns} data={data[1]} />
                {/* <InsightsRow columns={columns} data={data[2]} /> */}
            </tbody>
        </table>
    )
}

export default InsightsTable;