import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export default Title; 