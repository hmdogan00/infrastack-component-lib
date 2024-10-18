'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import {
  BasicItem, ChartProps, Override, DataType
} from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const pieChartOptionCreator = <T extends BasicItem, >(chartData: DataType<T>, overrides: Override) => {
  if (!chartData.series[0]) {
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
      name: chartData.series[0].name,
      type: 'pie',
      label: {
        color: '#fff'
      },
      radius: '50%',
      data: chartData.series[0].data,
      color: chartData.series[0].color,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
  createdDefaults.series = createdDefaults.series.map((series, index) => merge({}, series, overrides.series?.[index])); // to make sure that the series overrides are applied correctly
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function PieChart<T extends BasicItem>({
  data, optionOverrides = {}
}: ChartProps<T>) {
  if (!data.series[0]) {
    throw new Error('PieChart only supports a single data item');
  }
  return <ReactEchart option={pieChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(PieChart);
