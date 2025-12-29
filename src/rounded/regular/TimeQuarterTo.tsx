import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeQuarterTo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 12a12 12 0 0 1 -24 0 1 1 0 0 1 2 0 10 10 0 1 0 10-10 1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-13.723-1h-2.277a1 1 0 0 0 0 2h2.277a1.994 1.994 0 1 0 2.723-2.723v-3.277a1 1 0 0 0 -2 0v3.277a2 2 0 0 0 -.723.723zm-8.45-2.216a1 1 0 1 0 -1-1 1 1 0 0 0 1 1zm2.394-3.577a1 1 0 1 0 -1-1 1 1 0 0 0 1 1zm3.558-2.366a1 1 0 1 0 -1-1 1 1 0 0 0 1 1z"/></svg>
);
