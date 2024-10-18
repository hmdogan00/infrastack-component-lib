'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import { BasicItem, ChartProps, Override } from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const barChartOptionCreator = <T extends BasicItem, >(chartData: T[], overrides: Override) => {
  const createdDefaults = {
    legend: {
      data: chartData.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: chartData.map((item) => item.x)
    },
    series: chartData.map((item) => ({
      name: item.name,
      type: 'bar',
      data: item.data,
      color: item.color
    }))
  };
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function BarChart<T extends BasicItem>({
  data, optionOverrides
}: ChartProps<T>) {
  return <ReactEchart option={barChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(BarChart);
