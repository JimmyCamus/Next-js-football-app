import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Container from "./Container";
import Card from "./Card";
import Title from "./Title";
import P from "./P";

const Root = ({ teams, seasonD1, seasonD2 }) => {
  const getSeasonId = (teamId) => {
    let leagueId = -1;

    seasonD1.standings.forEach((team) => {
      if (team.team_id == teamId) {
        leagueId = seasonD1.season_id;
        return;
      }
    });

    seasonD2.standings.forEach((team) => {
      if (team.team_id == teamId) {
        leagueId = seasonD2.season_id;
        return;
      }
    });

    return leagueId;
  };

  return (
    <div>
      <Head>
        <title>Chilean teams app</title>
      </Head>
      <Container flexDirection="column">
        <Title color="#fff" fontSize="50px" fontWeight="700" rFontSize="30px">
          Chilean football teams statistics
        </Title>
      </Container>
      <div>
        <Container flexDirection="column"></Container>
      </div>
      <div>
        <Container flexDirection="row">
          {teams.map((team) => {
            const leagueId = getSeasonId(team.team_id);
            if (leagueId === -1) {
              return null;
            }
            return (
              <div key={team.team_id}>
                <Link href={`/teams/${leagueId}/${team.team_id}`}>
                  <a>
                    <Card
                      margin="10px 20px"
                      width="250px"
                      boxShadow="1px 0px 80px rgba(200, 200, 200, 0.3)"
                      transform="translateY(-1px);"
                      rWidth="150px"
                    >
                      <Image
                        src={team.logo}
                        alt=""
                        width="100px"
                        height="100px"
                      />
                      <P color="#fff" fontSize="16px" fontWeight="500">
                        {team.name}
                      </P>
                    </Card>
                  </a>
                </Link>
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default Root;
