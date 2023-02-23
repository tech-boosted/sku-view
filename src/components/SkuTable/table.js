<table {...getTableProps()} style={{ border: 'solid 1px black' }}>
    <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) =>
                (
                    <th
                        {...column.getHeaderProps()}
                        style={{
                            padding: '1em',
                            border: 'solid 1px gray',
                            color: 'black'
                        }}
                    >
                        {column.render('Header')}
                    </th>
                ))}
            </tr>
        ))}
    </thead>
    <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return (
                            <td
                                {...cell.getCellProps()}
                                style={{
                                    padding: '5px 2px',
                                    border: 'solid 1px gray'
                                }}
                            >
                                {cell.render('Cell')}
                            </td>
                        )
                    })}
                </tr>
            )
        })}
    </tbody>
</table>