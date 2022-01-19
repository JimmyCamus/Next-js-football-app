import styled from "styled-components";

const Card = styled.div`
  background-color: #363636;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export default Card;