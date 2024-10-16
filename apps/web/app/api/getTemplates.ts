const getChartData = async () => {
  const response = await fetch('routes/templates');
  const data = await response.json();
  return data;
};

export default getChartData;
