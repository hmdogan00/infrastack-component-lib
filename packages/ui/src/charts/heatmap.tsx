'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import { BasicItem, ChartProps, Override } from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const heatmapOptionCreator = <T extends BasicItem, >(chartData: T[], overrides: Override) => {
  if (!chartData[0]) {
    throw new Error('Heatmap requires a single data item');
  }
  const createdDefaults = {
    grid: {
      bottom: null,
      containLabel: null,
      right: null,
      left: null,
      height: '50%',
      top: '10%'
    },
    tooltip: {
      formatter: null,
      trigger: null,
      position: 'top'
    },
    legend: null,
    xAxis: {
      type: 'category',
      data: chartData[0].x,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: chartData[0].y,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '10%'
    },
    series: [{
      name: chartData[0].name,
      type: 'heatmap',
      data: chartData[0].data,
      // color: chartData.color,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function Heatmap<T extends BasicItem>({
  data, optionOverrides
}: ChartProps<T>) {
  if (data.length !== 1) {
    throw new Error('Heatmap only supports a single data item');
  }
  if (!Array.isArray(data[0]?.data[0])) {
    throw new Error('Heatmap data must be a 2D array');
  }
  return <ReactEchart option={heatmapOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(Heatmap);
