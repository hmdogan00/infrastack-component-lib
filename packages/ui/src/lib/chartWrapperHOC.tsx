'use client';

import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/card';
import { ChartProps } from '../types';

type ChartWrapperProps<T> = {
    title: string;
    description: string;
    footer: string;
} & ChartProps<T>;

const withChartWrapper = <T, >(ChartComponent: FC<ChartProps<T>>) => function ChartWrapper({
  title, description, footer, ...rest
}: ChartWrapperProps<T>) {
  return (
    <Card>
      {(title || description) && (
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      )}
      <CardContent>
        <ChartComponent {...rest} />
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default withChartWrapper;
