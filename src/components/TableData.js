import React from 'react'
import { Table } from 'react-bootstrap'
import Paginate from "./Paginate"

function TableData() {
  return (
    <div className="table-data"><h1 style={{textAlign: 'center'}}>Cars Launched Recently</h1>
<Table   striped bordered hover size="sm">
  <thead>
    <tr>
      <th>index </th>
      <th>Car name</th>
      <th>Color</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Benz</td>
      <td>red</td>
      <td>may-2022</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ferrari</td>
      <td>black</td>
      <td>apr-2022</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TATA</td>
      <td>blue</td>
      <td>feb-2022</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Jaguar</td>
      <td>red</td>
      <td>jan-2022</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Benz</td>
      <td>white</td>
      <td>jan-2022</td>
    </tr>
  </tbody>
</Table>
<Paginate/>
    </div>
  )
}

export default TableData
