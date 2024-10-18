'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import {
  BasicItem, ChartProps, DataType, Override
} from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const barChartOptionCreator = <T extends BasicItem, >(chartData: DataType<T>, overrides: Override) => {
  const createdDefaults = {
    legend: {
      data: chartData.series.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      data: chartData.xAxis
    },
    yAxis: {
      type: 'value',
      data: chartData.yAxis
    },
    series: chartData.series.map((item) => ({
      name: item.name,
      type: 'bar',
      data: item.data,
      color: item.color
    }))
  };
  createdDefaults.series = createdDefaults.series.map((series, index) => merge({}, series, overrides.series?.[index])); // to make sure that the series overrides are applied correctly
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function BarChart<T extends BasicItem>({
  data, optionOverrides = {}, chartRef
}: ChartProps<T>) {
  if (!Array.isArray(data.series)) {
    throw new Error('Bar Chart requires an array of data items');
  }
  return <ReactEchart ref={chartRef} option={barChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(BarChart);
