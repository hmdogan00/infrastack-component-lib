'use client';

import ReactEchart from 'echarts-for-react';
import merge from 'lodash/merge';
import {
  BasicItem, ChartProps, DataType, Override
} from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

export const lineChartOptionCreator = <T extends BasicItem, >(chartData: DataType<T>, overrides: Override) => {
  const createdDefaults = {
    legend: {
      data: chartData.series.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: chartData.xAxis
    },
    series: chartData.series.map((item) => ({
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
  createdDefaults.series = createdDefaults.series.map((series, index) => merge({}, series, overrides.series?.[index])); // to make sure that the series overrides are applied correctly
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function LineChart<T extends BasicItem>({
  data, optionOverrides = {}, chartRef
}: ChartProps<T>) {
  if (!Array.isArray(data.series)) {
    throw new Error('Line Chart requires an array of data items');
  }
  return <ReactEchart ref={chartRef} option={lineChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(LineChart);
