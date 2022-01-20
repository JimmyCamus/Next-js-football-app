import styled from "styled-components";

const Card = styled.div`
  background-color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 15px;
  border-radius: 8px;
  margin: ${(props) => props.margin};
  color: #fff;
  width: ${(props) => props.width};
  transition: all 0.3s ease;

  &:hover{
    transform: ${(props) => props.transform};
    box-shadow: ${(props) => props.boxShadow};
  }

  @media screen and (max-width: 768px) {
    width: ${(props) => props.rWidth};
  }
`;

export default Card;