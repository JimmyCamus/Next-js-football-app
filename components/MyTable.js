import styled from "styled-components";

const MyTable = styled.table`
  background-color: #363636;
  margin-top: 5px;
  margin-bottom: 30px;
  border: none;
  border-collapse: collapse;
  text-align: center;
  border-radius: 5px;
  color: #fff;

  td,
  th {
    padding: 15px;
    border-bottom: 1px solid #474747;
  }

  th {
    background-color: #474747;
  }

  td {
    width: 1px;
  }

  @media screen and (max-width: 768px) {
    font-size: 8px;
    font-weight: 700;
  }
`;

export default MyTable;

