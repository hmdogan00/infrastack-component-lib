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

export const LineChart1 = () => (
  <LineChartLib
    title="Line Chart - Basic"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{}}
  />
);

export const LineChart2 = () => (
  <LineChartLib
    title="Line Chart"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{
      series: {
        smooth: true
      }
    }}
  />
);

export const LineChart3 = () => {
  const coloredData = {
    xAxis: mockData.xAxis,
    series: mockData.series.map((s, i) => ({
      ...s,
      color: i === 0 ? '#ffcccc' : '#cc0000'
    }))
  };
  return (
    <LineChartLib
      title="Line Chart - Custom Colors"
      description="Showing total visitors for the last 6 months"
      footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
      data={coloredData}
    />
  );
};

export const LineChart4 = () => (
  <LineChartLib
    title="Line Chart - Brush & Zoom Toolbox"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{
      legend: null,
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false
          },
          brush: {
            type: ['lineX', 'clear']
          }
        }
      },
      brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        outOfBrush: {
          colorAlpha: 0.1
        }
      }
    }}
  />
);
