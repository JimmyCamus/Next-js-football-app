import styled from "styled-components";

const SubTitle = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.rFontSize};
  }
`;

export default SubTitle; 