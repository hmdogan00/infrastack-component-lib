import { AreaChart as AreaChartLib } from '@repo/ui';

const mockData = [
  {
    x: 'Jan',
    name: 'Series 1',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    x: 'Feb',
    name: 'Series 2',
    data: [9, 8, 7, 6, 5, 4, 3, 2, 1]
  },
  {
    x: 'Mar',
    name: 'Series 3',
    data: [5, 6, 7, 8, 9, 1, 2, 3, 4]
  },
  {
    x: 'Apr',
    name: 'Series 4',
    data: [3, 4, 5, 6, 7, 8, 9, 1, 2]
  },
  {
    x: 'May',
    name: 'Series 5',
    data: [7, 8, 9, 1, 2, 3, 4, 5, 6]
  }
];

const AreaChart = () => (
  <AreaChartLib
    title="Area Chart"
    description="This is an area chart"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{}}
  />
);

export default AreaChart;
