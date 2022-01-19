const usePointCalculator = (ctx) => {
  const homePoints = ctx.home.won * 3 + ctx.home.draw;
  const awayPoints = ctx.away.won * 3 + ctx.away.draw;

  return {
    homePoints,
    awayPoints,
  };
};

export default usePointCalculator;
