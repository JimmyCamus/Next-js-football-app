import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.rFontSize};
  }
`;

export default Title; 