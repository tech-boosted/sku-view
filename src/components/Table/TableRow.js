import React from 'react';

const TableRow = ({ index, columns, columnLength }) => {

    const renderCells = () => {
        var arr = [];
        for (let i = 0; i < columnLength; i++) {
            arr.push(
                <td key={i}>123</td>
            )
        }
        return arr
    }

    return (
        <tr key={index} className="">
            {renderCells()}
        </tr>
    )
}

export default TableRow;