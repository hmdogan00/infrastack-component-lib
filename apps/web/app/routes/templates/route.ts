import { ChartTemplate } from '../../../types';
import Database from '../db';

export const dynamic = 'force-dynamic';// defaults to auto

export async function GET(): Promise<Response> {
  const db = Database.getInstance().getConnection();
  const query = 'SELECT * FROM templates';
  const templates = await db.query(query) as ChartTemplate[];
  return Response.json(templates);
}
