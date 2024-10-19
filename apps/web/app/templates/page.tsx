'use client';

import {
  CardLoaderN, NotFound, Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@repo/ui';
import { useQuery } from '@tanstack/react-query';
import ReactGridLayout from 'react-grid-layout';
import { getTemplates } from '../api/templates';
import { getRelativeTime } from '../utils/functions';
import { CHART_DEMO_SET } from '../utils/constants';

export default function Home() {
  const { data: templates, isLoading, isError } = useQuery({
    queryFn: async () => getTemplates(),
    queryKey: ['templates']
  });
  return (
    <div className="templates-main flex flex-col justify-center gap-8 p-10">
      <main className="grid grid-cols-3 grid-flow-row gap-8 flex-grow">
        {isLoading && <CardLoaderN n={9} />}
        {isError && <div>Error loading templates</div>}
        {templates && templates.length === 0 && <NotFound className="col-span-3 row-span-4" error="You don't have any templates!" description="Add a new template from the button above" />}
        {templates && templates.map((template) => {
          const layout = JSON.parse(template.layout_data).map((l) => ({ ...l, static: true }));
          const chartData = JSON.parse(template.chart_data) as { id: string }[];
          return (
            <Card key={template.id} className="flex flex-col justify-between flex-grow max-h-96 gap-2">
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <ReactGridLayout layout={layout} width={300} cols={1} rowHeight={50}>
                  {chartData.map((chart) => {
                    const ChartComponent = CHART_DEMO_SET.find((c) => c.id === chart.id)?.Renderer;
                    return (
                      <div key={chart.id}>
                        {ChartComponent && <ChartComponent />}
                      </div>
                    );
                  })}
                </ReactGridLayout>
                <span>{`${template.chart_count} charts`}</span>
              </CardContent>
              {template.created_at && (
              <CardFooter className="pb-3">
                <span className="text-gray-600">{getRelativeTime(template.created_at)}</span>
              </CardFooter>
              )}
            </Card>
          );
        })}
      </main>
    </div>
  );
}
