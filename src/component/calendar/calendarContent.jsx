import { useState } from "react";
import Calendar from "./calender";
import Details from "./Details";
import "./calendarContent.css";

function CalendarContent() {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className="calendarHeader">
      <h1>Book</h1>
      <br />
      {/* <h2>Example</h2> */}
      <Calendar showDetailsHandle={showDetailsHandle} />
      <br />
      {/* {showDetails && <Details data={data} />} */}
    </div>
  );
}

export default CalendarContent;
