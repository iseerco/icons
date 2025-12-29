import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVolumeMute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.123,5.5c-1.171,0-2.123.952-2.123,2.123v8.754c0,1.171.952,2.123,2.123,2.123h3.144l7.733,5.109V.391l-7.733,5.109h-3.144Zm7.877.469v12.062l-3.832-2.531h-3.168v-7h3.168l3.832-2.531Zm11.146,6.031l2.453,2.453-2.121,2.121-2.453-2.453-2.453,2.453-2.121-2.121,2.453-2.453-2.453-2.453,2.121-2.121,2.453,2.453,2.453-2.453,2.121,2.121-2.453,2.453Z"/></svg>

);
