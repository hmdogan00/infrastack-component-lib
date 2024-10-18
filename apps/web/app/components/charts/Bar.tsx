import { BarChart as BarChartLib } from '@repo/ui';

const mockData = [
  {
    x: 'Jan',
    name: 'Series 1',
    color: '#ff0000',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    x: 'Feb',
    name: 'Series 2',
    color: '#00ff00',
    data: [9, 8, 7, 6, 5, 4, 3, 2, 1]
  },
  {
    x: 'Mar',
    name: 'Series 3',
    color: '#0000ff',
    data: [5, 6, 7, 8, 9, 1, 2, 3, 4]
  },
  {
    x: 'Apr',
    name: 'Series 4',
    color: '#ff00ff',
    data: [3, 4, 5, 6, 7, 8, 9, 1, 2]
  },
  {
    x: 'May',
    name: 'Series 5',
    color: '#00ffff',
    data: [7, 8, 9, 1, 2, 3, 4, 5, 6]
  }
];

const BarChart = () => (
  <BarChartLib
    title="Bar Chart"
    description="This is a bar chart"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{}}
  />
);

export default BarChart;
