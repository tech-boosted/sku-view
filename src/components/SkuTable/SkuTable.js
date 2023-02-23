import React from "react";
import Table from '@mui/material/Table'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import { useTable } from 'react-table';
import skudata from './skudata.json';
import "./SkuTable.css";

console.log("skudata: ", skudata);
console.log("skudata.skuHeader: ", skudata.skuHeader);

var headers = skudata.skuHeader;
var tableData = skudata.skuData;

const SkuTable = () => {
    const data = React.useMemo(() => tableData, [])

    const columns = React.useMemo(() => headers, [])

    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table"{...getTableProps()} className="skutable-root">
            <TableHead >
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()} >
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()} size="small">
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default SkuTable;