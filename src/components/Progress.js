import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function Progress() {
  return (
    <div style={{padding: '100px',marginTop: '80px'}}>


<div>
  <ProgressBar striped variant="success" now={40} />
  <br/>
  <br/>
  <ProgressBar striped variant="info" now={20} />
  <br/>
  <br/>

  <ProgressBar striped variant="warning" now={60} />
  <br/>
  <br/>

  <ProgressBar striped variant="danger" now={80} />
  <br/>
  <br/>

</div>
      
    </div>
  )
}

export default Progress
