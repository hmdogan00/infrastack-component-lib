'use client';

import {
  AreaChart1, AreaChart2, AreaChart3, AreaChart4, AreaChart5
} from './components/charts/Area';
import {
  LineChart1, LineChart2, LineChart3, LineChart4
} from './components/charts/Line';
import { BarChart1, BarChart2, BarChart3 } from './components/charts/Bar';
import { Heatmap1, Heatmap2 } from './components/charts/Heatmap';
import PieChart from './components/charts/Pie';

export default function Home() {
  return (
    <div className="grid gap-2 grid-cols-3 mt-5 mx-5">
      <AreaChart1 />
      <AreaChart2 />
      <AreaChart3 />
      <AreaChart4 />
      <AreaChart5 />
      <BarChart1 />
      <BarChart2 />
      <BarChart3 />
      <LineChart1 />
      <LineChart2 />
      <LineChart3 />
      <LineChart4 />
      <Heatmap1 />
      <Heatmap2 />
      <PieChart />
    </div>
  );
}
