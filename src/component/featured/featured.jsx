import React, { Component } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import "./featured.css";

class Featured extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <div className="featured">
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bestvisarun.com/wp-content/uploads/2019/03/7.jpg"
            ></img>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bestvisarun.com/wp-content/uploads/2019/03/7.jpg"
            ></img>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bestvisarun.com/wp-content/uploads/2019/03/7.jpg"
            ></img>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://bestvisarun.com/wp-content/uploads/2019/03/7.jpg"
            ></img>
          </div>
        </div>
      </Container>
    );
  }
}

export default Featured;
