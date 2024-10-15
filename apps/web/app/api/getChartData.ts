const getChartData = async () => {
  const response = await fetch('charts/data');
  const data = await response.json();
  return data;
};

export default getChartData;
