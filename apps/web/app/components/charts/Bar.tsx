import { BarChart as BarChartLib } from '@repo/ui';
import { mockData, mockDataSingle, mockDataNegatives } from './mocks';

export const BarChart1 = () => (
  <BarChartLib
    title="Bar Chart - Multiple"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{
      series: {
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      }
    }}
  />
);

export const BarChart2 = () => (
  <BarChartLib
    title="Bar Chart - Single"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockDataSingle}
  />
);

export const BarChart3 = () => (
  <BarChartLib
    title="Bar Chart - Horizontal Negative"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockDataNegatives}
    optionOverrides={{
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: undefined
      },
      xAxis: {
        type: 'value',
        position: 'top',
        lineStyle: {
          type: 'dashed'
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      },
      series: {
        stack: 'Total',
        itemStyle: {
          borderRadius: [5, 5, 0, 0]
        }
      }
    }}
  />
);
