import React, { Component } from "react";
import Header from "../../component/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Featured from "../../component/featured/featured";
import Content from "../../component/content/content";
import Footer from "../../component/footer/footer";
import HomeNews from "../../component/content/homeNews/homeNews";
import { ThemeProvider } from "react-bootstrap";
import CreateBooking from "../../component/content/bookingModal";
import FormExample from "../../component/calendar/test";

class Home extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <div>
          {/* <CreateBooking /> */}
          <Header />
          <div>
            <Featured />
          </div>
          <div>
            <Content />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Home;
