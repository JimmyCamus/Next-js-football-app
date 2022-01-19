import Image from "next/image";

const Tr = ({row}) => {
  console.log(row)
  return (
    <tr>
      <td>{row.points}</td>
      <td>{row.games_played}</td>
      <td>{row.won}</td>
      <td>{row.draw}</td>
      <td>{row.lost}</td>
      <td>{row.goals_diff}</td>
      <td>{row.goals_scored}</td>
      <td>{row.goals_against}</td>
    </tr>
  );
}

export default Tr;