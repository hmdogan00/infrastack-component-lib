'use client';

import AreaChart from './components/charts/Area';
import LineChart from './components/charts/Line';
import BarChart from './components/charts/Bar';
import Heatmap from './components/charts/Heatmap';
import PieChart from './components/charts/Pie';

export default function Home() {
  return (
    <div className="grid gap-2 grid-cols-3 mt-5 mx-5">
      <AreaChart />
      <LineChart />
      <BarChart />
      <Heatmap options={{
        visualMap: {
          inRange: {
            color: ['#a9a9a9', '#696969']
          }
        }
      }}
      />
      <Heatmap options={{
        visualMap: {
          inRange: {
            color: ['#ffcccc', '#cc0000']
          }
        }
      }}
      />
      <PieChart />
    </div>
  );
}
