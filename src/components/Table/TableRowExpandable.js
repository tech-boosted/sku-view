import React from 'react';

const TableRowExpandable = ({ index, columns, columnLength ,toggleRow }) => {


    const renderCells = () => {
        var arr = [];
        arr.push(
            <td key={0}>
                <button onClick={(e, index) => toggleRow(e, index)}>
                    {">"}
                </button>
            </td>
        )
        for (let i = 1; i < columnLength; i++) {
            arr.push(
                <td key={i}>123</td>
            )
        }
        return arr
    }

    return (
        <>
            <tr key={index}>
                {renderCells()}
            </tr>
        </>
    )
}

export default TableRowExpandable;