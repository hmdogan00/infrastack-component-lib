'use client';

import { FC } from 'react';
import ReactEchart from 'echarts-for-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/card';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  }
};

type ChartItem = {
  month: string;
  desktop: number;
  mobile: number;
};

const optionCreator = (chartData: ChartItem[]) => ({
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
    data: chartData.map((item) => item.month)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Desktop',
      type: 'line',
      stack: 'Total',
      areaStyle: {
        opacity: 0.4
      },
      lineStyle: {
        width: 2
      },
      emphasis: {
        focus: 'series'
      },
      data: chartData.map((item) => item.desktop),
      color: chartConfig.desktop.color
    },
    {
      name: 'Mobile',
      type: 'line',
      stack: 'Total',
      areaStyle: {
        opacity: 0.4
      },
      lineStyle: {
        width: 2
      },
      emphasis: {
        focus: 'series'
      },
      data: chartData.map((item) => item.mobile),
      color: chartConfig.mobile.color
    }
  ]
});

type AreaChartProps = {
  data: ChartItem[];
};

const AreaChart: FC<AreaChartProps> = ({ data }) => (
  <Card>
    <CardHeader>
      <CardTitle>Area Chart - Stacked</CardTitle>
      <CardDescription>
        Showing total visitors for the last 6 months
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ReactEchart option={optionCreator(data)} style={{ height: '300px' }} />
    </CardContent>
    <CardFooter>
      <div className="flex w-full items-start gap-2 text-sm">
        <div className="grid gap-2">
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            January - June 2024
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default AreaChart;
