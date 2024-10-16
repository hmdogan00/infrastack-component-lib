const getChartData = async () => {
  const response = await fetch('routes/charts');
  const data = await response.json();
  return data;
};

export default getChartData;
