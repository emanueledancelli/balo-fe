import React from "react";
import styled from "@emotion/styled";
import { withRouter } from "react-router-dom";

const Container = styled("div")`
  background-color: transparent;
  position: absolute;
  height: 7vh;
  min-width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
`;

const Filter = styled("p")`
  color: rgba(255, 255, 255, 0.8);
  width: 50%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 3%;
  font-weight: 500;
`;

const FilterIcon = styled("p")`
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-weight: 300;
  padding-top: 2%;
  padding-right: 3%;
`;

class Header extends React.Component {
  render() {
    const { location } = this.props;
    let place;

    if (location.pathname === "/") {
      place = "Best today";
    } else if (location.pathname.startsWith("/eventi/today")) {
      place = "Today";
    } else if (location.pathname.startsWith("/eventi/week")) {
      place = "Everything this week";
    } else if (location.pathname.startsWith("/eventi/weekend")) {
      place = "On the weekend";
    } else if (location.pathname.startsWith("/eventi/clubbing")) {
      place = "Clubbing";
    } else if (location.pathname.startsWith("/eventi/concerts")) {
      place = "Concerts";
    } else if (location.pathname.startsWith("/eventi/culture")) {
      place = "Culture";
    } else if (location.pathname.startsWith("/eventi/shows")) {
      place = "Shows";
    }

    return (
      <Container loc={place}>
        <Filter>{place}</Filter>
      </Container>
    );
  }
}

export default withRouter(Header);
