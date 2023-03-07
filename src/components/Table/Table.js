import React from 'react'

const Table = (props) => {

  var columns = props.columns;
  var columnLength = props.columns.length;

  const renderColumns = () => {
    var arr = [];
    columns.forEach((col, index) => {
      arr.push(
        <th key={index}>{col}</th>
      )
    });
    return arr;
  }

  const renderCell = () => {
    var arr = [];
    for (let i = 0; i < columnLength; i++) {
      arr.push(
        <td key={i}>My Cell</td>
      )
    }
    return arr
  }

  const renderData = () => {
    var arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <tr key={i}>
          {renderCell()}
        </tr>
      )
    }
    return arr
  }

  return (
    <div>
      <table className={'table is-fullwidth is-hoverable is-bordered ' + props.customTableClass}>
        <thead>
          <tr>
            {renderColumns()}
          </tr>
        </thead>

        <tbody>
          {renderData()}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
