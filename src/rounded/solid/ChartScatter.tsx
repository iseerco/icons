import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartScatter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,24H2.988C1.333,24-.012,22.654-.012,21V1C-.006-.308,1.982-.307,1.988,1V21c0,.552,.449,1,1,1H23c1.308,.006,1.307,1.995,0,2ZM14,13c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0Zm6-6c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0Zm-9,11c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0Zm9-1c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0ZM9,5c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0Zm-4,7c.006,1.308,1.994,1.308,2,0-.006-1.308-1.994-1.308-2,0Z"/></svg>

);
