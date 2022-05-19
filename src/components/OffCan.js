import React, { useState } from 'react'
import { Button,Card,Offcanvas } from 'react-bootstrap';

function OffCan() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <p variant="dark" onClick={handleShow}>
      About
    </p>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990__480.jpg" />
  <Card.Body>
    <Card.Title>Latest car</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary"> Coming soon </Button>
  </Card.Body>
</Card>
      </Offcanvas.Body>
    </Offcanvas>
  </>
    
    
    
    
  )
}

export default OffCan
