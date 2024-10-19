import {
  AreaChart1, AreaChart2, AreaChart3, AreaChart4, AreaChart5
} from '../components/charts/Area';
import { BarChart1, BarChart2, BarChart3 } from '../components/charts/Bar';
import { Heatmap1, Heatmap2 } from '../components/charts/Heatmap';
import {
  LineChart1, LineChart2, LineChart3, LineChart4
} from '../components/charts/Line';
import PieChart from '../components/charts/Pie';

export const CHART_DEMO_SET = [
  { id: '1', name: 'Area Chart - Stacked Smooth', Renderer: AreaChart1 },
  { id: '2', name: 'Area Chart - Stacked Step', Renderer: AreaChart2 },
  { id: '3', name: 'Area Chart - Stacked Linear', Renderer: AreaChart3 },
  { id: '4', name: 'Area Chart - Single Data', Renderer: AreaChart4 },
  { id: '5', name: 'Area Chart - Brush', Renderer: AreaChart5 },
  { id: '6', name: 'Bar Chart - Multiple', Renderer: BarChart1 },
  { id: '7', name: 'Bar Chart - Single', Renderer: BarChart2 },
  { id: '8', name: 'Bar Chart - Horizontal Negative', Renderer: BarChart3 },
  { id: '9', name: 'Line Chart - Basic', Renderer: LineChart1 },
  { id: '10', name: 'Line Chart - Smooth', Renderer: LineChart2 },
  { id: '11', name: 'Line Chart - Custom Colors', Renderer: LineChart3 },
  { id: '12', name: 'Line Chart - Brush And Zoom Toolbox', Renderer: LineChart4 },
  { id: '13', name: 'Pie Chart - Access From', Renderer: PieChart },
  { id: '14', name: 'Heatmap - Error Count', Renderer: Heatmap1 },
  { id: '15', name: 'Heatmap - Trace Count', Renderer: Heatmap2 }
];

export default CHART_DEMO_SET;
