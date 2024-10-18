import { AreaChart as AreaChartLib } from '@repo/ui';
import { useEffect, useRef } from 'react';
import { mockData, mockDataSingle } from './mocks';
import { EchartsRef } from '../../../types';

export const AreaChart1 = () => (
  <AreaChartLib
    title="Area Chart - Stacked Smooth"
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

export const AreaChart2 = () => (
  <AreaChartLib
    title="Area Chart - Stacked Step"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
    optionOverrides={{
      series: {
        step: 'middle'
      }
    }}
  />
);

export const AreaChart3 = () => (
  <AreaChartLib
    title="Area Chart - Stacked Linear"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockData}
  />
);

export const AreaChart4 = () => (
  <AreaChartLib
    title="Area Chart - Single Data"
    description="Showing total visitors for the last 6 months"
    footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
    data={mockDataSingle}
    optionOverrides={{
      series: {
        smooth: true
      }
    }}
  />
);

export const AreaChart5 = () => {
  const chartRef = useRef<EchartsRef>(null);

  useEffect(() => {
    const chart = chartRef.current?.getEchartsInstance();
    if (chart) {
      chart.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'brush',
        brushOption: {
          brushType: 'lineX',
          brushMode: 'single'
        }
      });
      chart.on('brushEnd', (params) => {
        console.log(params);
      });
    }
  }, []);
  return (
    <AreaChartLib
      ref={chartRef}
      title="Area Chart - Brush"
      description="Showing total visitors for the last 6 months"
      footer={<p className="text-gray-400 font-extralight">January - June 2024</p>}
      data={mockData}
      optionOverrides={{
        series: {
          smooth: true
        },
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
};
