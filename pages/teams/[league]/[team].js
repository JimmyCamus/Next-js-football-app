import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import usePointCalculator from "../../../hooks/usePointCalculator";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle";
import P from "../../../components/P";
import getSeasonData from "../../../utils/getSeasonData";

const Team = ({ leagueData, teamStatistics, teamData }) => {
  const { homePoints, awayPoints } = usePointCalculator(teamStatistics);

  return (
    <div>
      <Head>
        <title>Chilean teams app</title>
      </Head>
      <div>
        <Link href="/">
          <a>
            <Button>Back Home</Button>
          </a>
        </Link>
      </div>
      <div>
        <Container flexDirection="column">
          <Card margin="5px 0px" rWidth="250px">
            <Image
              src={teamData.logo}
              alt={`${teamData.name} logo`}
              width="130px"
              height="130px"
            />
            <Title color="#fff" fontSize="30px" fontWeight="700" rFontSize="20px">
              {teamData.name}
            </Title>
            <SubTitle color="#fff" fontSize="25px" fontWeight="700" rFontSize="16px">
              {leagueData == "741"
                ? "Primera División"
                : leagueData == "742"
                ? "Primera B"
                : "N/A"}
            </SubTitle>
            <P color="#fff" fontSize="20px" fontWeight="700" rFontSize="14px">
              Position: {teamStatistics.position}
            </P>
          </Card>
        </Container>
      </div>
      <div>
        <Container flexDirection="column">
          <SubTitle color="#fff" fontSize="30px" fontWeight="600" rFontSize="20px">
            Overall
          </SubTitle>
          <Table
            rows={getSeasonData(
              [teamStatistics.overall],
              teamStatistics.points
            )}
          />
        </Container>
        <Container flexDirection="column">
          <SubTitle color="#fff" fontSize="30px" fontWeight="600" rFontSize="20px">
            Home
          </SubTitle>
          <Table rows={getSeasonData([teamStatistics.home], homePoints)} />
        </Container>
        <Container flexDirection="column">
          <SubTitle color="#fff" fontSize="30px" fontWeight="600" rFontSize="20px">
            Away
          </SubTitle>
          <Table rows={getSeasonData([teamStatistics.away], awayPoints)} />
        </Container>
      </div>
    </div>
  );
};

export default Team;

export const getServerSideProps = async ({ params }) => {
  const leagueResponse = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${process.env.API_KEY}&season_id=${params.league}`
  );
  const teamResponse = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/teams/${params.team}?apikey=${process.env.API_KEY}`
  );

  const teamData = await teamResponse.json();

  const leagueData = await leagueResponse.json();

  const teamStatistics = leagueData.data.standings.filter((x) => {
    return x.team_id == params.team ? x : null;
  });

  return {
    props: {
      leagueData: leagueData.data.league_id,
      teamStatistics: teamStatistics[0],
      teamData: teamData.data,
    },
  };
};
