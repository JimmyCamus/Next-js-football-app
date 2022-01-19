import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:${(props) => props.flexDirection};
  flex-wrap: wrap;
`;


export default Container;