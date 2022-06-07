import React, { Component } from "react";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="footerMainCont">
        <Container>
          <Row className="footer">
            <Col>
              <Nav className="fLists">
                <div className="footerMainText">
                  <Nav className="me-auto footerList">
                    <h3>Eligible For Status Change:</h3>
                  </Nav>
                </div>

                <div className="footerLists">
                  <ul className="footerList">
                    <li>Belgium</li>
                    <li>Bulgaria</li>
                    <li>Croatia</li>
                    <li>Cyprus</li>
                    <li>Czech Republic</li>
                    <li>Denmark</li>
                    <li>Estonia</li>
                    <li>Finland</li>
                    <li>Finland</li>
                    <li>France</li>
                    <li>Germany</li>
                  </ul>
                  <ul className="footerList">
                    <li>Greece</li>
                    <li>Hungary</li>
                    <li>Iceland</li>
                    <li>Italy</li>
                    <li>Latvia</li>
                    <li>Liechtenstein</li>
                    <li>Lithuania</li>
                    <li>Luxembourg</li>
                    <li>Malta</li>
                    <li>Monaco</li>
                  </ul>
                  <ul className="footerList">
                    <li>Netherlands</li>
                    <li>Norway</li>
                    <li>Poland</li>
                    <li>Portugal</li>
                    <li>Romania</li>
                    <li>Slovakia</li>
                    <li>Slovenia</li>
                    <li>Spain</li>
                    <li>Sweden</li>
                    <li>Switzerland</li>
                  </ul>
                </div>
              </Nav>
              <div></div>
            </Col>
            <Col>
              <div className="fLists">
                <div className="footerMainText">
                  <Nav className="me-auto footerList">
                    <h3>Visit Visa Extension And Status Change:</h3>
                  </Nav>
                </div>
                <div className="footerLists">
                  <ul className="footerList">
                    <li>Australia</li>
                    <li>Brunei</li>
                    <li>Canada</li>
                    <li>Hong Kong SAR</li>
                    <li>Ireland</li>
                    <li>Japan</li>
                    <li>Russia</li>
                    <li>China</li>
                    <li>Seychelles</li>
                  </ul>
                  <ul className="footerList">
                    <li>Malaysia</li>
                    <li>New Zealand</li>
                    <li>Singapore</li>
                    <li>South Korea</li>
                    <li>UK</li>
                    <li>USA</li>
                    <li>Argentina</li>
                    <li>Chile</li>
                    <li>Ukraine</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Footer;
