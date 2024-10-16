'use client';

import {
  CardLoaderN, Button, NotFound, Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@repo/ui';
import { useQuery } from '@tanstack/react-query';
import { PlusCircleIcon } from 'lucide-react';
import styles from './page.module.css';
import getTemplates from './api/getTemplates';
import { getRelativeTime } from './utils/functions';

export default function Home() {
  const { data: templates, isLoading, isError } = useQuery({
    queryFn: async () => getTemplates(),
    queryKey: ['templates']
  });
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className="text-3xl font-semibold text-primary-foreground">My Templates</h1>
        <Button>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Add Template
        </Button>
      </header>
      <main className={styles.main}>
        {isLoading && <CardLoaderN n={12} />}
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
