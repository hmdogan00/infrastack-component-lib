export const dynamic = 'force-dynamic'; // defaults to auto

const mockData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
  { month: 'Jul', desktop: 128, mobile: 90 },
  { month: 'Aug', desktop: 248, mobile: 210 },
  { month: 'Sep', desktop: 190, mobile: 150 },
  { month: 'Oct', desktop: 150, mobile: 80 },
  { month: 'Nov', desktop: 250, mobile: 200 },
  { month: 'Dec', desktop: 350, mobile: 300 }
];

export async function GET(): Promise<any> {
  return Response.json(mockData);
}
