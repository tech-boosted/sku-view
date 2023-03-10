import React from 'react';
// import Table from './Table';
import TableBodyExpandable from './TableBodyExpandable';

const InsightTable = ({ columns, customClass }) => {

    var columnLength = columns.length;

    const renderHeaders = () => {
        var arr = [];
        columns.forEach((col, index) => {
            arr.push(
                <th key={index}>{col}</th>
            )
        });
        return arr;
    }
    return (
        <table className={'table is-fullwidth is-hoverable ' + customClass}>
            <thead>
                <tr>
                    {renderHeaders()}
                </tr>
            </thead>
            <TableBodyExpandable
                columns={columns}
            />
        </table>
    )
}

export default InsightTable;