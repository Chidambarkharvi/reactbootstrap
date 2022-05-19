import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap';

function Alertt() {
  const [show, setShow] = useState(true);


    if (show) {
        return ( 
            <div style={{width: "30%"}}>

          <Alert variant="primary">
            <Alert.Heading>Successfully submited yout details</Alert.Heading>
            <Button onClick={() => setShow(!show)}>Close</Button>
          </Alert>
            </div>
        );}

  return (
    <div>
   <Button onClick={() => setShow(!show)}>Show Alert</Button>
      
    </div>
  )
}

export default Alertt
