import React from 'react'
import './Table.css'

var rows = [{
    name: 'The Four Horsemen',
    location: 'Brooklyn, NYC',
    recipe: 'Pork bahn mi, chicken liver mousse, pickled daikon, cilantro, anchovy',
  },
  {
    name: '108',
    location: 'Copenhagen, Denmark',
    recipe: 'Glazed pork chop, berries, anchovy, spices',
  }
];

function renderRow(row) {
  return (
    <tr>
      <td>{row.name}<br />{row.location}</td>
      <td>{row.recipe}</td>
    </tr>
  );
}

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
                {rows.map (item => renderRow(item))}
        </table>
      </div>
    );
}

 export default Table;