import { Heatmap as HeatmapLib } from '@repo/ui';

/* Create a heatmap chart data with the following specifications:

Y-axis: Latency
X-axis: Time */
const mockX = ['12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30'];
const mockY = ['200ms', '400ms', '600ms', '800ms', '1000ms'];
const mockData = {
  xAxis: mockX,
  yAxis: mockY,
  series: [{
    name: 'Trace Count',
    // data is a 2d array of the form [x, y, value]
    data: Array.from({ length: mockY.length * mockX.length }, (_, i) => [
      i % mockX.length,
      Math.floor(i / mockX.length),
      Math.floor(Math.random() * 100)
    ])
  }]
};

export const Heatmap1 = () => (
  <HeatmapLib
    title="Heatmap"
    description="This is a heatmap"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{
      visualMap: {
        inRange: {
          color: ['#a9a9a9', '#696969']
        }
      }
    }}
  />
);

export const Heatmap2 = () => (
  <HeatmapLib
    title="Heatmap"
    description="This is a heatmap"
    footer="This is the footer"
    data={mockData}
    optionOverrides={{
      visualMap: {
        inRange: {
          color: ['#ffcccc', '#cc0000']
        }
      }
    }}
  />
);
