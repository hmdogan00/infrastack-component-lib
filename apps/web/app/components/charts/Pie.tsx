import { PieChart as PieChartLib } from '@repo/ui';

const mockData = [{
  name: 'Access From',
  data: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]
}];

const PieChart = () => (
  <PieChartLib
    title="PieChart"
    description="This is a piePieChart"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{}}
  />
);

export default PieChart;
