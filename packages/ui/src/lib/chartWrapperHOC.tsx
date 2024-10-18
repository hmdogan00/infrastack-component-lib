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
import { BasicItem, ChartProps } from '../types';

type ChartWrapperProps<T extends BasicItem> = {
    title: string;
    description: string;
    footer: string;
} & ChartProps<T>;

const withChartWrapper = <T extends BasicItem, >(ChartComponent: FC<ChartProps<T>>) => function ChartWrapper({
  title, description, footer, ...rest
}: ChartWrapperProps<T>) {
  return (
    <Card className="dark">
      {(title || description) && (
      <CardHeader className="dark">
        {title && <CardTitle className="dark">{title}</CardTitle>}
        {description && <CardDescription className="dark">{description}</CardDescription>}
      </CardHeader>
      )}
      <CardContent className="dark">
        <ChartComponent {...rest} />
      </CardContent>
      {footer && <CardFooter className="dark">{footer}</CardFooter>}
    </Card>
  );
};

export default withChartWrapper;
