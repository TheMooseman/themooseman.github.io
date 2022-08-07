import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

export default function DataTable({ data, tHeader, tHeads, tDivClass, tTableClass}) {

  return (
    <div className={tDivClass}>
        <h1>{tHeader}</h1>
          <table className={tTableClass}>
          <Scrollbars >
            <thead>
              <tr>
                {
                    tHeads.map(head => (
                        <th>{head}</th>
                    ))
                }
              </tr>
            </thead>
            <tbody>
            {
                data.map(row => (
                    <tr>
                        {
                            row.map((col, index) => (
                                <td>{col}</td>
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
            </Scrollbars>
          </table>
    </div>
  )
}
