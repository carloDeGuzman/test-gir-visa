import { useState } from "react";
import { Modal, Button, Col, Row, Form, Container } from "react-bootstrap";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import axios from "axios";

const Calendar = ({ showDetailsHandle }) => {
  // console.log("render calendar " + showDetailsHandle);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tripType, setTripType] = useState();
  const [tripTime, setTripTime] = useState();
  const [tripPlace, setTripPlace] = useState();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  //console.log(selectedDate);

  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    nationality: "",
    paymentType: "COD",
    tripType: "",
    tripDate: format(selectedDate, "MMM dd yyyy"),
    tripTime: "",
    noOfTicket: 1,
  });

  const handleTicketAmt = (props) => {
    if (props == "i") {
      setBooking((prev) => {
        return { ...prev, noOfTicket: prev.noOfTicket + 1 };
      });
    } else {
      setBooking((prev) => {
        return { ...prev, noOfTicket: prev.noOfTicket - 1 };
      });
    }
  };

  const handleCOD = (props) => {
    setBooking((prev) => {
      return {
        ...prev,
        paymentType: props,
      };
    });
  };

  function handleBookingChange(event) {
    const { title, value } = event.target;
    //console.log(event.target);
    setBooking((prev) => {
      console.log(prev);
      return {
        ...prev,
        [title]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    console.log(booking);
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log(booking);
      axios.post(
        "https://sheet.best/api/sheets/72f2e1ed-ebfe-4e46-99f3-9ace0b054965",
        booking
      );
    }
    console.log("tru");
    setValidated(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const chooseTripHandle = (trip, param) => {
    // trip.tripDay = "test";
    setTripType(document.getElementById("tripType").innerHTML);
    setTripTime(document.getElementById("tripTime").innerHTML);
    setTripPlace(document.getElementById("tripPlace").innerHTML);

    setBooking((prev) => {
      return {
        ...prev,
        tripType: param == "m" ? "Morning Trip" : "Afternoon Trip",
      };
    });
    setBooking((prev) => {
      return {
        ...prev,
        tripTime: param == "m" ? "8:45am" : "3:00pm",
      };
    });
    setBooking((prev) => {
      return {
        ...prev,
        tripPlace:
          param == "m"
            ? "Dubai Marina Mall main entrance (By the Valet parking)"
            : "mall",
      };
    });

    // trip.tripTime = document.getElementById("tripTime").innerHTML;
    // trip.tripType = document.getElementById("tripType").innerHTML;
    setShow(true);
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    // console.log("test " + day + " ===== " + dayStr);
    setSelectedDate(day);
    showDetailsHandle(dayStr);
    const formattedDate = format(day, "MMM dd yyyy");
    console.log(formattedDate);
    // const formattedDate = format(selectedDate, "mm/dd/yyyy");
    // console.log(formattedDate);
    setBooking((prev) => {
      return {
        ...prev,
        tripDate: formattedDate,
      };
    });
    console.log(booking);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          {/* <div className="icon" onClick={() => changeMonthHandle("prev")}>
            prev month
          </div> */}
        </div>

        <div className="col col-center">
          <span>Book for {format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          {/* <div className="icon" onClick={() => changeMonthHandle("next")}>next month</div> */}
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "dd";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            style={{ width: "3em", height: "3em" }}
            className={`col cell ${
              // isSameDay(day, new Date())
              //   ? ""
              //   :
              isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  const renderFooter = () => {
    const dateFormat2 = "MMM yyyy";
    const month = format(currentMonth, dateFormat2);
    return (
      <div
        className="header  flex-middle calendarFooter"
        style={{ display: "flex" }}
      >
        <div className="">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev
          </div>
        </div>
        <div>{month}</div>
        <div className="" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next</div>
        </div>
      </div>
    );
  };
  const renderTrips = () => {
    const dateFormat = "dd";
    const dateFormat2 = "MMM";
    //console.log(format(selectedDate, "EEEE"));
    const trip = {
      date: format(selectedDate, dateFormat),
      month: format(currentMonth, dateFormat2),
      tripType: "",
      tripTime: "",
      tripDay: format(selectedDate, "EEEE"),
      tripPlace: "",
    };

    return (
      <div className="row currentTrips">
        <div className="col">
          <div className="row" onClick={() => chooseTripHandle(trip, "m")}>
            <div className="col currentTrip">
              <div className="row tripDate">{trip.date}</div>
              <div className="row tripMonth">{trip.month}</div>
              <div className="row tripType">
                <span id="tripType" className="tripType">
                  Morning Trip
                </span>
                <span id="tripPlace" hidden>
                  Dubai Marina Mall main entrance (By the Valet parking)
                </span>
              </div>
              <div className="row">
                <span id="tripTime">8:45am</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row" onClick={() => chooseTripHandle(trip, "a")}>
            <div className="col currentTrip">
              <div className="row tripDate">{trip.date}</div>
              <div className="row tripMonth">{trip.month}</div>
              <div className="row tripType">
                <span id="tripType" className="tripType">
                  Afternoon Trip
                </span>
              </div>
              <div className="row">
                <span id="tripTime">3:00pm</span>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} style={{ width: "80%" }}>
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                {/* <Form.Label>Email address</Form.Label> */}
                <div className="formDiv">
                  <Form.Control
                    required
                    type="input"
                    title="firstName"
                    value={booking.firstName}
                    placeholder="First Name"
                    onChange={handleBookingChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    First name is required
                  </Form.Control.Feedback>
                  <Form.Control
                    required
                    title="lastName"
                    value={booking.lastName}
                    type="input"
                    placeholder="Last Name"
                    onChange={handleBookingChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Last name is required
                  </Form.Control.Feedback>
                  <Form.Control
                    required
                    type="input"
                    placeholder="Phone Number"
                    title="phoneNo"
                    value={booking.phoneNo}
                    onChange={handleBookingChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number is required
                  </Form.Control.Feedback>
                  <Form.Control
                    required
                    type="email"
                    placeholder="name@example.com"
                    title="email"
                    value={booking.email}
                    onChange={handleBookingChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address
                  </Form.Control.Feedback>

                  <Form.Control
                    required
                    type="input"
                    placeholder="Nationality"
                    title="nationality"
                    value={booking.nationality}
                    onChange={handleBookingChange}
                  />
                  <div className="ticketNo">
                    <div className="ticketNo">
                      <span>No of Tickets</span>
                      <Button
                        disabled={booking.noOfTicket == 1}
                        onClick={() => handleTicketAmt("d")}
                      >
                        -
                      </Button>
                      <span className="ticketText">{booking.noOfTicket}</span>
                      <Button onClick={() => handleTicketAmt("i")}>+</Button>
                    </div>
                  </div>
                  <Form.Check
                    required
                    inline
                    label="Cash on Location"
                    name="COD"
                    title="paymentType"
                    type={"radio"}
                    id={`inline-${"radio"}-2`}
                    onClick={() => handleCOD("COD")}
                  />
                  <Form.Control.Feedback type="invalid">
                    Mode of payment is required.
                  </Form.Control.Feedback>
                  <div className="bookingSummary">Booking Details</div>
                  <div>
                    {trip.date} {trip.month} {trip.tripTime} {trip.tripDay}
                  </div>
                  <div>{booking.tripType}</div>
                  <div>{booking.tripTime}</div>
                  <div style={{ padding: "0px 0px 15px" }}>
                    {booking.tripPlace}
                  </div>
                  <div className="ticketNo">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Proceed</Button>
                  </div>
                </div>
              </Form.Group>
            </Form>
          </Container>

          {/* <Modal.Header closeButton>
            <Modal.Title>
              {trip.date} {trip.month} {trip.tripTime} {trip.tripDay}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{tripType}</div>
            <div>{tripTime}</div>
            <div style={{ padding: "0px 0px 15px" }}>{tripPlace}</div>
            <div className="test2">
              <div>
                <h3>BOOK NOW</h3>
              </div>
            </div>
            <div className="test2">
              <div className="bookPrice">
                <span>price</span>
                <div>
                  <span>150</span>
                  <span>&nbsp; &nbsp; AED</span>
                </div>
              </div>
              <div className="bookPrice">
                <span>How many ticket</span>
                <span>150</span>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>

        {/*         
        <div className="col col-center currentTrip">{date}</div> */}
      </div>
    );
  };
  return (
    <div className="calendar">
      {/* {renderHeader()} */}
      {renderFooter()}
      {renderDays()}
      {renderCells()}
      {renderTrips()}
    </div>
  );
};

export default Calendar;
