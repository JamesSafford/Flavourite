import React from 'react'
import './Table.css'

var rows = [];

function Table() {
    return (
      <div  class="topnav">
          
        <table className="Table">
                <thead>
                    <tr>
                        <th >Restaurant</th>
                        <th >Dish</th>
                    </tr>
                </thead>
                <tr>
            
            <td>{rows}</td>
                </tr>
        </table>
      </div>
    );
}

 export default Table;