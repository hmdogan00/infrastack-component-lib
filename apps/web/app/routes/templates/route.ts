import { ChartTemplate } from '../../../types';

export const dynamic = 'force-dynamic';// defaults to auto
const mockChartTemplates: ChartTemplate[] = [
  {
    id: '1',
    title: 'Chart 1',
    chartCount: 1,
    options: undefined,
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Chart 2',
    chartCount: 2,
    options: undefined,
    created_at: '2024-02-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'Chart 3',
    chartCount: 3,
    options: undefined,
    created_at: '2024-03-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Chart 4',
    chartCount: 4,
    options: undefined,
    created_at: '2024-04-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Chart 5',
    chartCount: 5,
    options: undefined,
    created_at: '2024-05-01T00:00:00Z'
  },
  {
    id: '6',
    title: 'Chart 6',
    chartCount: 6,
    options: undefined,
    created_at: '2024-06-01T00:00:00Z'
  },
  {
    id: '7',
    title: 'Chart 7',
    chartCount: 7,
    options: undefined,
    created_at: '2024-07-01T00:00:00Z'
  },
  {
    id: '8',
    title: 'Chart 8',
    chartCount: 8,
    options: undefined,
    created_at: '2024-08-01T00:00:00Z'
  },
  {
    id: '9',
    title: 'Chart 9',
    chartCount: 9,
    options: undefined,
    created_at: '2024-09-01T00:00:00Z'
  }
];

export async function GET(): Promise<any> {
  return Response.json(mockChartTemplates);
}
