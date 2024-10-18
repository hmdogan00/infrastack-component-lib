'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import {
  BasicItem, ChartProps, DataType, Override
} from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const areaChartOptionCreator = <T extends BasicItem, >(chartData: DataType<T>, overrides: Override) => {
  const createdDefaults = {
    tooltip: {
      trigger: 'axis',
      formatter(params: any) {
        let tooltipContent = `${params[0].name}<br/>`;
        params.forEach((param: any) => {
          tooltipContent += `${param.seriesName}: ${param.value}<br/>`;
        });
        return tooltipContent;
      }
    },
    legend: {
      data: chartData.series.map((item) => item.name)
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        lineStyle: {
          width: 0
        }
      },
      data: chartData.xAxis
    },
    series: chartData.series.map((item) => ({
      name: item.name,
      type: 'line',
      stack: 'Total',
      areaStyle: {
        opacity: 0.9
      },
      lineStyle: {
        width: 2
      },
      emphasis: {
        focus: 'series'
      },
      showSymbol: false,
      data: item.data,
      color: item.color
    }))
  };
  createdDefaults.series = createdDefaults.series.map((series) => merge({}, series, overrides.series)); // to make sure that the series overrides are applied correctly
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function AreaChart<T extends BasicItem>({
  data, optionOverrides = {}, chartRef
}: ChartProps<T>) {
  if (!Array.isArray(data.series)) {
    throw new Error('AreaChart requires an array of data items');
  }
  return <ReactEchart ref={chartRef} option={areaChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(AreaChart);
