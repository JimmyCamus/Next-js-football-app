import Image from "next/image";
import MyTable from "./MyTable";
import Tr from "./Tr";

const Table = ({ rows }) => {
  return (
    <div>
      <MyTable>
        <tr>
          <th>Points</th>
          <th>Games played</th>
          <th>Wins</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>Goals diff</th>
          <th>Goals scored</th>
          <th>Goals against</th>
        </tr>
        {rows.map((row) => (
          <Tr key="" row={row} />
        ))}
      </MyTable>
    </div>
  );
};

export default Table;
