import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carosels() {
  return (
    <div className="carousel">
    
    <Carousel>
  <Carousel.Item>
    <img
      className=" carosel  d-block w-100 "
      src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide car</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" carosel  d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide car</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" carosel  d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190__480.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide car</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    </div>
  )
}

export default Carosels