import React from 'react'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap'

function Pop() {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );


  return (
    <div style={{padding:"140px"}}>
      
   




  <OverlayTrigger trigger="click" placement="right" overlay={popover} >
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>


    </div>
  )
}

export default Pop


