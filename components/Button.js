import styled from "styled-components";

const Button = styled.button`
  background-color: #363636;
  color: #fff;
  border-radius: 3px;
  border: none;
  margin: 20px;
  padding: 15px 20px;
  transition: all 0.3s ease;

  &:hover{
    cursor: pointer;
    box-shadow: 1px 0px 80px rgba(200, 200, 200, 0.3);
    transform: translateY(-1px);
  }
`;

export default Button;