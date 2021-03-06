import styled from "@emotion/styled";
import { mq } from "styles/mediaQueries";
import { colors } from "styles/colors";

export const Hero = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${props => (props.active ? colors.primary : colors.secondary)};
  letter-spacing: -1px;
  padding-left: 3%;
`;

export const Subtitle = styled.h2`
  color: ${colors.primary};
  font-size: 1.2em;
  padding-left: 3%;
`;

export const Section = styled.section`
  margin-bottom: ${props => (props.isLast ? "20vh" : "5vh")};
`;

export const Numbers = styled.span`
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 0.9em;
`;

export const Image = styled.div`
  height: 150px;
  width: 150px;
  margin-right: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: url(${props => props.thumb});
  background-size: cover;

  ${mq[2]} {
    height: 350px;
    width: 350px;
    margin-right: 25px;
    background: url(${props => props.medium});
  }
`;

export const CardTitle = styled.p`
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 0.9em;
  margin-top: 0.6em;
  color: #666;
  ${mq[2]} {
    font-size: 1.2rem;
  }
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  margin-right: 10px;
  width: 150px;
  ${mq[2]} {
    width: 350px;
  }
`;

export const Tag = styled.p`
  color: #cdcdcd;
  background-color: #222;
  padding: 1% 2%;
  font-size: 0.8em;
  margin: 0;
`;

export const SquareContainer = styled.div`
  padding-left: 3%;
  white-space: nowrap;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`;
