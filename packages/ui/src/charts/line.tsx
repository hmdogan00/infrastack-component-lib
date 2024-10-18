'use client';

import ReactEchart from 'echarts-for-react';
import merge from 'lodash/merge';
import { BasicItem, ChartProps, Override } from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

export const lineChartOptionCreator = <T extends BasicItem, >(chartData: T[], overrides: Override) => {
  const createdDefaults = {
    legend: {
      data: chartData.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chartData.map((item) => item.x)
    },
    series: chartData.map((item) => ({
      name: item.name,
      type: 'line',
      lineStyle: {
        width: 1
      },
      emphasis: {
        focus: 'series'
      },
      data: item.data,
      color: item.color
    }))
  };
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function LineChart<T extends BasicItem>({
  data, optionOverrides
}: ChartProps<T>) {
  return <ReactEchart option={lineChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(LineChart);
