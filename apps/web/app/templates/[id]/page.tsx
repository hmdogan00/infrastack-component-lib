'use client';

import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
  CardLoaderN
} from '@repo/ui';
import GridLayout, { Layout, WidthProvider } from 'react-grid-layout';
import { CHART_DEMO_SET } from '../../utils/constants';
import { getTemplate } from '../../api/templates';

const WidthGridLayout = WidthProvider(GridLayout);

type TemplateDetailsProps = {params: { id: string }};

const TemplateDetails: FC<TemplateDetailsProps> = ({ params }) => {
  const { data: template, isLoading, isError } = useQuery({
    queryFn: async () => getTemplate(params.id),
    queryKey: ['template', params.id]
  });
  const layout = (JSON.parse(template?.layout_data || '[]') as Layout[]).map((l) => ({ ...l, static: true }));
  const charts = JSON.parse(template?.chart_data || '[]') as { id: string }[];
  return (
    <>
      { isLoading && <CardLoaderN n={1} /> }
      { isError && <div>Error loading template</div> }
      { template && (
      <Card className="flex flex-col min-h-93vh p-6">
        <CardHeader className="p-0">
          <CardTitle>{template.title}</CardTitle>
          <CardDescription>
            Add charts, move and resize them, and click save to create a new template.
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col flex-grow space-y-4 mt-5">
          <WidthGridLayout
            className="layout"
            cols={12}
            rowHeight={85}
            style={{ minHeight: '42rem' }}
            layout={layout}
            isDraggable={false}
            isResizable={false}
          >
            {charts.map((chart) => {
              const ChartComponent = CHART_DEMO_SET.find((c) => c.id === chart.id)?.Renderer;
              return (
                <div
                  key={chart.id}
                >
                  {ChartComponent && <ChartComponent />}
                </div>
              );
            })}
          </WidthGridLayout>
        </div>
      </Card>
      )}
    </>
  );
};

export default TemplateDetails;
