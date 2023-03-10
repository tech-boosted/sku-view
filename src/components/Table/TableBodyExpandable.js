import React, { useState } from 'react'
import TableRowExpandable from './TableRowExpandable';

const TableBodyExpandable = ({ columns }) => {

    const [display, toggleDisplay] = useState("");

    const toggleRow = (e, index) => {
        if (display === "is-hidden") {
            toggleDisplay("")
        } else {
            toggleDisplay("is-hidden")
        }
    }

    var columnLength = columns.length;

    const renderRows = () => {
        var arr = [];
        for (let i = 0; i < 6; i++) {
            arr.push(
                <>
                    <TableRowExpandable key={i} columns={columns} columnLength={columnLength} toggleRow={toggleRow} />

                    <table className={display + " table is-fullwidth is-hoverable column"}>
                        <tbody>
                        </tbody>
                    </table>
                </>
            )
        }
        return arr;
    }

    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

export default TableBodyExpandable;
