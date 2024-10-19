import { ChartTemplate } from '../../../types';
import Database from '../db';

export const dynamic = 'force-dynamic';// defaults to auto

export async function GET(): Promise<Response> {
  const db = Database.getConnection();
  const query = 'SELECT * FROM templates';
  const templates = await db.query(query) as string[];
  return Response.json(templates);
}

export async function POST(request: Request): Promise<Response> {
  const db = Database.getConnection();
  const template = await request.json() as ChartTemplate;
  const query = 'INSERT INTO templates (title, chart_count, layout_data, chart_data) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [template.title, template.chart_count, template.layout_data, template.chart_data];
  const newTemplate = await db.query(query, values) as ChartTemplate[];
  return Response.json(newTemplate);
}
