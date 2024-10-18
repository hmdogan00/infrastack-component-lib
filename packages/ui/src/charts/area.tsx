'use client';

import ReactEchart from 'echarts-for-react';
import { merge } from 'lodash';
import { BasicItem, ChartProps, Override } from '../types';
import { CHART_DEFAULTS } from '../lib/utils';
import withChartWrapper from '../lib/chartWrapperHOC';

const areaChartOptionCreator = <T extends BasicItem, >(chartData: T[], overrides: Override) => {
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
  return merge({}, CHART_DEFAULTS, createdDefaults, overrides);
};

function AreaChart<T extends BasicItem>({
  data, optionOverrides
}: ChartProps<T>) {
  return <ReactEchart option={areaChartOptionCreator(data, optionOverrides)} />;
}

export default withChartWrapper(AreaChart);
