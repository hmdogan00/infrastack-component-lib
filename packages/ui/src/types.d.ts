import EChartsReact from 'echarts-for-react';

export type BasicItem = {
  x?: string | string[];
  y?: string | string[];
  name: string;
  data: number[] | number[][] | { value: number; name: string }[];
  color?: string;
};

export type Override = {
  tooltip?: {
    trigger?: string;
    axisPointer?: {
      type?: string;
    };
    // eslint-disable-next-line no-unused-vars
    formatter?: (params: any) => string;
  };
  legend?: {
    data?: string[];
  } | null;
  grid?: {
    left?: string;
    right?: string;
    bottom?: string;
    containLabel?: boolean;
  };
  xAxis?: {
    type?: string;
    boundaryGap?: boolean;
    position?: string;
    lineStyle?: {
      type?: string;
    };
    data?: string[];
  };
  yAxis?: {
    type?: string;
    axisLine?: {
      show?: boolean;
    };
    axisLabel?: {
      show?: boolean;
    };
    axisTick?: {
      show?: boolean;
    };
    splitLine?: {
      show?: boolean;
    };
  };
  series?: {
    smooth?: boolean;
    step?: string;
    name?: string;
    type?: string;
    stack?: string;
    itemStyle?: {
      borderRadius?: number[];
    };
    areaStyle?: {
      opacity?: number;
    };
    lineStyle?: {
      width?: number;
    };
    emphasis?: {
      focus?: string;
    };
    data?: number[];
    color?: string;
  };
  toolbox?: {
    feature?: {
      dataZoom?: {
        yAxisIndex?: boolean;
      };
      brush?: {
        type?: string[];
        brushMode?: string;
      };
    };
  };
  brush?: {
    xAxisIndex?: string;
    brushLink?: string;
    outOfBrush?: {
      colorAlpha?: number;
    };
  };
  visualMap?: {
    min?: number;
    max?: number;
    calculable?: boolean;
    orient?: string;
    left?: string;
    bottom?: string;
    inRange?: {
      color?: string[];
    }
  };
};

export type DataType<T extends BasicItem> = {
  xAxis?: string[];
  yAxis?: string[];
  series: T[];
};

export type ChartProps<T extends BasicItem> = {
  chartRef?: React.LegacyRef<EChartsReact>;
  data: DataType<T>;
  optionOverrides?: Override;
};
