import React from "react";
import SwipeableViews from "react-swipeable-views";
import Loadable from "react-loadable";
import { Loader } from "components/Loader";

const Hero = Loadable({
  loader: () => import("./components/Hero"),
  loading: Loader
});

const Description = Loadable({
  loader: () => import("./components/Description"),
  loading: Loader
});

class SingleScrolling extends React.Component {
  state = {
    windowHeight: Number
  };
  componentDidMount() {
    let h = window.screen.height;
    this.setState({
      windowHeight: h
    });
  }
  createDescription = des => {
    return { __html: des };
  };

  render() {
    const { windowHeight } = this.state;
    const { description } = this.props;

    const style = {
      container: {
        height: windowHeight
      },
      slide: {
        minHeight: windowHeight
      },
      slide2: {
        minHeight: windowHeight,
        marginBottom: 100
      },
      scroll: {
        overflowY: "scroll",
        minHeight: windowHeight
      }
    };

    return (
      <SwipeableViews containerStyle={style.container} axis="y">
        <div style={style.slide}>
          <Hero {...this.props} />
        </div>
        <div style={style.scroll}>
          <div style={style.slide2}>
            <Description description={description} />
          </div>
        </div>
      </SwipeableViews>
    );
  }
}

export default SingleScrolling;
