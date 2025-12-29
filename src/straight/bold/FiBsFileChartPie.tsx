import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.614,12.077c.247,.592,.386,1.241,.386,1.923,0,2.761-2.239,5-5,5s-5-2.239-5-5,2.239-5,5-5v5l4.614-1.923Zm5.386-6.413V24H2V3C2,1.346,3.346,0,5,0h11.382l5.618,5.665Zm-3,15.335V8h-5V3H5V21h14Z"/></svg>

);
