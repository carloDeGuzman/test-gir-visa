import { faClock, faClockFour } from "@fortawesome/free-regular-svg-icons";
import {
  faClockRotateLeft,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import CalendarContent from "../calendar/calendarContent";
import "./content.css";

class Content extends Component {
  state = {};

  render() {
    return (
      <Container>
        <div className="contentMain">
          <Row>
            <Col>
              <div className="calendarContent">
                <CalendarContent />
              </div>
            </Col>
            <Col style={{ justifyContent: "end" }}>
              <div className="pickUpContents">
                <div className="pickUpSchedules">
                  <div>
                    <h2>Pickup Points & Timings:</h2>
                  </div>
                  <div className="pickUpSchedule">
                    <div className="clockIcon">
                      <FontAwesomeIcon icon={faClock} className="test" />
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title className="pickUpCard">
                            Morning Trip
                          </Card.Title>
                          <Card.Text>
                            8:45 AM Dubai Marina Mall main entrance (By the
                            Valet parking)
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="pickUpSchedule">
                    <div className="clockIcon">
                      <FontAwesomeIcon icon={faClock} className="test" />
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Body>
                          <Card.Title className="pickUpCard">
                            Afternoon Trip
                          </Card.Title>
                          <Card.Text>
                            <div className="contentTrip">
                              <div>
                                2:45 AM Dubai Marina Mall main entrance (By the
                                Valet parking)
                              </div>
                              <div>
                                3:00 PM Emirates Towers Metro Station Exit 1, In
                                front of "Little Bangkok" Restaurant
                              </div>
                            </div>
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="privateTours">
                    <Button className="privateTourBtn" variant="primary">
                      <div className="privateTour">
                        <span>
                          <FontAwesomeIcon icon={faPeopleGroup} />
                        </span>
                        <span className="btnText">Private tour</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Content;
