import React, { Component } from "react";
import { faPhoneFlip, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  NavDropdown,
  Stack,
} from "react-bootstrap";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

class Header extends Component {
  //state = {  }
  render() {
    return (
      <Container fluid style={{ background: "black" }}>
        <Container className="brandContainer">
          <Row>
            <Col>
              <div>
                <h1 className="headerTitle">PRO VISA RUN</h1>
              </div>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col style={{ paddingLeft: "0" }}>
            <Navbar className="navbarMain" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Row>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link className="navLinkItems" href="#home">
                      <p className="navLinkItemText">Home</p>
                    </Nav.Link>
                    <Nav.Link className="navLinkItems" href="#link">
                      <p className="navLinkItemText">About us</p>
                    </Nav.Link>
                    <Nav.Link className="navLinkItems" href="#link">
                      <p className="navLinkItemText">Book a trip</p>
                    </Nav.Link>
                    <Nav.Link className="navLinkItems" href="#link">
                      <p className="navLinkItemText">Private tour</p>
                    </Nav.Link>
                    <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.3">
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faPhoneFlip} />
                          </span>
                          <span className="headerItemText">Whatsapp</span>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                          </span>
                          <span className="headerItemText">
                            Call Now: +971 50 699 7888
                          </span>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <div>
                          <span>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                          <span className="headerItemText">
                            info@topvisarun.com
                          </span>
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
