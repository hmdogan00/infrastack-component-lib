import { PieChart as PieChartLib } from '@repo/ui';

const mockData = {
  series: [{
    name: 'Access From',
    data: [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ]
  }]
};

const PieChart = () => (
  <PieChartLib
    title="Pie Chart - Access From"
    description="Showing access from different sources"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{
      legend: {
        type: 'scroll'
      }
    }}
  />
);

export default PieChart;
