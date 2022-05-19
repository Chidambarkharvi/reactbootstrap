import React from "react";
import { Accordion, Figure, Spinner } from "react-bootstrap";
import Accord from "./Accord";

function Fig() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="light" /> Cars  
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="success" />
      </h1>
<div className="cars"> 


     

      <div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450__480.jpg"
          />
          <Accord />
        </Figure>
      </div>

      <div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2020/02/03/10/02/sports-car-4815234__480.jpg"
          />
          <Accord />
        </Figure>
      </div>

      <div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782__480.jpg"
          />
          <Accord />
        </Figure>
      </div>
</div>




<div className="cars">
<div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050__480.jpg"
          />
          <Accord />
        </Figure>
      </div>
      <div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469__480.jpg"
          />
          <Accord />
        </Figure>
      </div>
      <div className="car-image">
        <Figure>
          <Figure.Image
            width="100%"
            height="100%"
            src="https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450__480.jpg"
          />
          <Accord />
        </Figure>
      </div>
</div>
    </div>
  );
}

export default Fig;
