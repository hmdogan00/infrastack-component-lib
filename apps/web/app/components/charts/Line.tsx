import { LineChart as LineChartLib } from '@repo/ui';

const mockData = {
  xAxis: ['January', 'February', 'March', 'April', 'May', 'June'],
  series: [
    {
      name: 'Mobile',
      data: [80, 200, 120, 190, 130, 140]
    },
    {
      name: 'Desktop',
      data: [186, 305, 237, 73, 209, 214]
    }
  ]
};

const LineChart = () => (
  <LineChartLib
    title="Line Chart"
    description="This is a line chart"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{}}
  />
);

export default LineChart;
