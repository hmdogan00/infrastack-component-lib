export const dynamic = 'force-dynamic'; // defaults to auto

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

const mockData: ChartTemplate[] = [
  {
    title: 'Line Chart',
    type: 'line',
    options: {
      title: {
        text: 'Line Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
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
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Desktop',
          type: 'line',
          data: [186, 305, 237, 73, 209, 214, 128, 248, 190, 150, 250, 350]
        },
        {
          name: 'Mobile',
          type: 'line',
          data: [80, 200, 120, 190, 130, 140, 90, 210, 150, 80, 200, 300]
        }
      ]
    }
  },
  {
    title: 'Bar Chart',
    type: 'bar',
    options: {
      title: {
        text: 'Bar Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
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
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Desktop',
          type: 'bar',
          data: [186, 305, 237, 73, 209, 214, 128, 248, 190, 150, 250, 350]
        },
        {
          name: 'Mobile',
          type: 'bar',
          data: [80, 200, 120, 190, 130, 140, 90, 210, 150, 80, 200, 300]
        }
      ]
    }
  }
];

export async function GET(): Promise<any> {
  return Response.json(mockData);
}
