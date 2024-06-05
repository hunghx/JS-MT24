// import React from 'react'

// export default function Table() {
//     // js ở đây 
//   return (
//     // trả về jsx
//     <div>
      
//     </div>
//   )
// }

import React, { Component } from 'react'
import './css/table.css';
interface User {
  id:number,
  name : string
}

class Table extends Component<User> {
// thuộc tính, constructor, method  
// state : trạng thái của component : thông tin về component 

// props : thuộc tính của component 

  render() {
    // js ở đây
    return (
      // trả về JSX 
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Huỳnh Tâm Anh</td>
                <td>KS2023A</td>
            </tr>
        </tbody>
      </table>
    )
  }
}
// Table.de ={
//     data : string
// }

export default Table;
