'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import { BasicItem, ChartProps, Override } from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const pieChartOptionCreator = <T extends BasicItem, >(chartData: T[], overrides: Override) => {
  if (!chartData[0]) {
    throw new Error('PieChart requires a single data item');
  }
  const createdDefaults = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    xAxis: null,
    yAxis: null,
    grid: null,
    series: [{
      name: chartData[0].name,
      type: 'pie',
      label: {
        color: '#fff'
      },
      radius: '50%',
      data: chartData[0].data,
      color: chartData[0].color,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function PieChart<T extends BasicItem>({
  data, optionOverrides
}: ChartProps<T>) {
  if (!data[0]) {
    throw new Error('PieChart only supports a single data item');
  }
  return <ReactEchart option={pieChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(PieChart);
