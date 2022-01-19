const getSeasonData = (season, points) => {
  let array = [];
  season.map((x) => {
    array.push({...x, points, })
  });

  return array;
};

export default getSeasonData;