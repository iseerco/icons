import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimelineArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.347 10.421-3.128-3.128-1.414 1.414 2.293 2.293h-6.598v-4h2.5v-7h-7v7h2.5v4h-8v-4h2.5v-7h-7v7h2.5v4h-2.5v2h7.5v4h-2.5v7h7v-7h-2.5v-4h11.598l-2.293 2.293 1.414 1.414 3.128-3.128c.871-.871.871-2.287 0-3.158z"/></svg>
);
