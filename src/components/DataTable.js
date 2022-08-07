import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

export default function DataTable({ data, tHeader, tHeads, tDivClass, tTableClass, tSearchClass}) {

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
                    <td>{row.teamName}</td>
                    <td>{row.venue.city}</td>
                    <td>{row.division.name}</td>
                    <td>{row.venue.timeZone.offset + ' GMT'}</td>
                </tr>  
                ))
              }
            </tbody>
            </Scrollbars>
          </table>
    </div>
  )
}
