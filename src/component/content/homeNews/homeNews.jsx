import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
class HomeNews extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <img />
                <h1>First slide label</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    );
  }
}

export default HomeNews;
