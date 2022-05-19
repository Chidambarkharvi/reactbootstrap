import React, { useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  Offcanvas,
  ProgressBar,
  Tab,
  Tabs,
} from "react-bootstrap";

function OffCan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState("home");

  return (
    <>
      <p variant="dark" onClick={handleShow}>
        About
      </p>
      <div className="offcan">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Famous">
                <div style={{ width: "400px" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990__480.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Latest car</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">
                        
                        <ProgressBar animated variant="warning" now={78} />
                      sale-Coming-soon
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
              <Tab eventKey="profile" title="upcoming-car-list">
                <div style={{ width: "400px" }}>
                <ListGroup>
  <ListGroup.Item> Tata Nexon EV Max.</ListGroup.Item>
  <ListGroup.Item>Mercedes-Benz C-Class</ListGroup.Item>
  <ListGroup.Item>Maruti Suzuki XL6</ListGroup.Item>
  <ListGroup.Item>. Maruti Suzuki Ertiga</ListGroup.Item>
  <ListGroup.Item> BMW X1</ListGroup.Item>
</ListGroup>
                </div>
              </Tab>
            </Tabs>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default OffCan;
