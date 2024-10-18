'use client';

import { FC, forwardRef, JSX } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/card';
import { BasicItem, ChartProps } from '../types';

type ChartWrapperProps = {
    title: string | JSX.Element;
    description: string | JSX.Element;
    footer: string | JSX.Element;
} & ChartProps<BasicItem>;

function withChartWrapper<T extends ChartWrapperProps, R>(ChartComponent: FC<ChartProps<BasicItem>>) {
  return forwardRef<R, T>(({
    title, description, footer, ...rest
  }, ref) => (
    <Card className="dark">
      {(title || description) && (
      <CardHeader className="dark">
        {title && <CardTitle className="dark">{title}</CardTitle>}
        {description && <CardDescription className="dark">{description}</CardDescription>}
      </CardHeader>
      )}
      <CardContent className="dark">
        <ChartComponent {...rest} chartRef={ref} />
      </CardContent>
      {footer && <CardFooter className="dark">{footer}</CardFooter>}
    </Card>
  ));
}

export default withChartWrapper;
