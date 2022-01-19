import Root from "../components/Root";

export default function Home({ teams, seasonD1, seasonD2 }) {
  return <Root teams={teams} seasonD1={seasonD1} seasonD2={seasonD2} />;
}

export const getServerSideProps = async () => {
  const teamResponse = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=${process.env.API_KEY}&country_id=30`
  );

  const seasonsD1Response = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${process.env.API_KEY}&league_id=741`
  );
  const seasonsD1Data = await seasonsD1Response.json();

  const seasonsD2Response = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${process.env.API_KEY}&league_id=742`
  );
  const seasonsD2Data = await seasonsD2Response.json();

  const activeSeasonD1 = seasonsD1Data.data.filter((x) => {
    return x.is_current === 1 ? x.season_id : null;
  });

  const activeSeasonD2 = seasonsD2Data.data.filter((x) => {
    return x.is_current === 1 ? x.season_id : null;
  });

  const seasonD1Response = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${process.env.API_KEY}&season_id=${activeSeasonD1[0].season_id}`
  );
  const seasonD2Response = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${process.env.API_KEY}&season_id=${activeSeasonD2[0].season_id}`
  );
  const teamData = await teamResponse.json();
  const seasonD1Data = await seasonD1Response.json();
  const seasonD2Data = await seasonD2Response.json();
  return {
    props: {
      teams: teamData.data,
      seasonD1: seasonD1Data.data,
      seasonD2: seasonD2Data.data,
    },
  };
};
