import { FC } from 'react';
import {
  Card, CardTitle, CardHeader, CardContent
} from './card';

export const CardLoader = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="animate-pulse">
        <div className="bg-gray-200 h-4 w-44 rounded-lg" />
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded-lg" />
      <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded-lg" />
      <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded-lg" />
    </CardContent>
  </Card>
);

export const CardLoaderN: FC<{n: number}> = ({ n }) => (
  Array.from({ length: n }).map((_, i) => (
    <CardLoader key={i} />
  ))
);
