/* eslint-disable no-unused-vars */
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
    id: string;
    created_at: string;
    title: string;
    chartCount: number;
    layout_data: string;
};

export type EchartsRef = {
    getEchartsInstance: () => {
        dispatchAction: (action: { type: string; key?: string; brushOption?: { brushType: string; brushMode: string; }, dataZoomSelectActive: boolean }) => void;
        on: (event: string, callback: (params: any) => void) => void;
    };
};
