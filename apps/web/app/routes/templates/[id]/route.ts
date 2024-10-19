import Database from '../../db';

export const dynamic = 'force-dynamic';// defaults to auto

export async function GET(request: Request, { params }: { params: {id: string}}): Promise<Response> {
  const db = Database.getConnection();
  const query = 'SELECT * FROM templates WHERE id = $1';
  const template = await db.query(query, [params.id]) as string[];
  return Response.json(template[0]);
}
