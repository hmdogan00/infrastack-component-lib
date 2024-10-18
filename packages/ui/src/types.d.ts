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
    // eslint-disable-next-line no-unused-vars
    formatter?: (params: any) => string;
  };
  legend?: {
    data?: string[];
  };
  grid?: {
    left?: string;
    right?: string;
    bottom?: string;
    containLabel?: boolean;
  };
  xAxis?: {
    type?: string;
    boundaryGap?: boolean;
    data?: string[];
  };
  yAxis?: {
    type?: string;
  };
  series?: {
    name: string;
    type: string;
    stack: string;
    areaStyle: {
      opacity: number;
    };
    lineStyle: {
      width: number;
    };
    emphasis: {
      focus: string;
    };
    data: number[];
    color: string;
  }[];
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

export type ChartProps<T extends BasicItem> = {
  data: T[];
  optionOverrides: Override;
};
