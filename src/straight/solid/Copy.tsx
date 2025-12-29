import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Copy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 20h-20v-17a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm2-15.816v17.816h-18v2h20v-17a3 3 0 0 0 -2-2.816z"/></svg>
);
