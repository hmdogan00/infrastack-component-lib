export type ChartTemplateOptions = {
    title: {
        text: string;
    };
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
        };
    };
    legend: {
        data: string[];
    };
    grid: {
        left: string;
        right: string;
        bottom: string;
        containLabel: boolean;
    };
    xAxis: {
        type: string;
        boundaryGap?: boolean;
        data: string[];
    };
    yAxis: {
        type: string;
    };
    series: {
        name: string;
        type: string;
        data: number[];
    }[];
};

export type ChartTemplate = {
    title: string;
    type: string;
    options: ChartTemplateOptions;
};
