import React from "react";
import styled from "@emotion/styled";
import Card from "../Home/components/Card";
import { connect } from "react-redux";

const Container = styled.div`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

class Single extends React.Component {
  render() {
    const { singleEvent } = this.props;

    return (
      <Container>
        {!singleEvent ? (
          <p>Loading....</p>
        ) : (
          <Card
            id={singleEvent.id}
            title={singleEvent.title.rendered}
            start_date={singleEvent.acf.start_date}
            start_time={singleEvent.acf.start_time}
            end_time={singleEvent.acf.end_time}
            place={singleEvent.acf.place.post_title}
            image={singleEvent.acf.image.url}
            key={singleEvent.id}
            description={singleEvent.acf.description}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { week, isLoading } = state.events.data;

  return {
    isLoading,
    singleEvent: week.filter(
      e => e.id === parseInt(ownProps.match.params.id)
    )[0]
  };
};

export default connect(mapStateToProps)(Single);
