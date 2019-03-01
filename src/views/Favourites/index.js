import React from "react";
import styled from "@emotion/styled";
import { getFavEvents } from "../../api/index";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  color: #222;
  margin-bottom: -3vh;
  padding-left: 3%;
  font-size: 2em;
`;
const SquareContainer = styled.div`
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Fix = styled.div`
  height: ${props => props.h};
`;

const Square = styled.div`
  width: 45vw;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #eb5757;
`;

class Favourites extends React.Component {
  state = {
    eventsToShow: [],
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    let names = JSON.parse(localStorage.getItem("fav"));
    if (names !== null) {
      getFavEvents(names).then(res => {
        console.log(res);
        this.setState({
          eventsToShow: res,
          isLoading: false
        });
        console.log(this.state);
      });
    } else {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { eventsToShow, isLoading } = this.state;
    let favEv;

    if (eventsToShow.length >= 1) {
      favEv = eventsToShow.map(e => {
        let thumbnail = e.data.acf.image.sizes.thumbnail;
        return (
          <Link to={`/single/${e.data.id}`} key={e.data.id}>
            <Square
              style={{
                background: `url(${thumbnail})`,
                backgroundSize: "cover"
              }}
            />
          </Link>
        );
      });
    } else {
      favEv = <p style={{ color: "#888" }}>Save some events already</p>;
    }

    return (
      <>
        <Container>
          <Title>Your saved events</Title>
        </Container>
        <SquareContainer>
          {isLoading ? <p>Loading...</p> : favEv}
        </SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

export default Favourites;