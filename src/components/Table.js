import React from 'react'
import './Table.css'

function Table(props) {
    return (
      <div  class="topnav">

        <table className="Table">
                <thead>
                    <tr>
                        <th >Restaurant</th>
                        <th >Dish</th>
                    </tr>
                </thead>
                {props.rows.map (row => (
                  <tr>
                    <td>{row.name}<br />{row.location}</td>
                    <td>{row.recipe}</td>
                  </tr>
                ))}
        </table>
      </div>
    );
}

 export default Table;
