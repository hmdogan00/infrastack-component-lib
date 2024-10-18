import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CHART_DEFAULTS = {
  tooltip: {
    formatter: (params: any) => `${params.name}<br/>${params.seriesName}: ${params.value}<br/>`,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textStyle: {
      color: '#f5f5f5'
    }
  },
  legend: {
    textStyle: {
      color: '#f5f5f5'
    }
  },
  axisPointer: {
    lineStyle: {
      color: '#696969'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    borderColor: '#696969'
  },
  xAxis: {
    data: []
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: '#696969',
        opacity: 0.3
      }
    }
  },
  series: []
};
