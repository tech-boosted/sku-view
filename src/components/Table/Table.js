import React from 'react'
import TableRow from './TableRow';

const Table = (props) => {

  var columns = props.columns;
  var columnLength = props.columns.length;

  const renderRows = () => {
    var arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(
        <TableRow key={i} columns={columns} columnLength={columnLength} />
      )
    }
    return arr;
  }

  return (
    <table className={'table is-fullwidth is-hoverable ' + props.display + props.customTableClass}>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default Table;
