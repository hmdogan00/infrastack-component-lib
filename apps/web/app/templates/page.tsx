'use client';

import {
  CardLoaderN, NotFound, Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@repo/ui';
import { useQuery } from '@tanstack/react-query';
import getTemplates from '../api/getTemplates';
import { getRelativeTime } from '../utils/functions';

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
        {templates && templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <span>{`${template.chartCount} charts`}</span>
            </CardContent>
            <CardFooter>
              <span>{getRelativeTime(template.created_at)}</span>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
