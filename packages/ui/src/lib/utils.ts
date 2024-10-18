import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CHART_DEFAULTS = {
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
    data: ['Desktop', 'Mobile']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: []
};
