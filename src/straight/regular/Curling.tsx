import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Curling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.855,10.3,18.781,6H7.136l.493-2.217A.992.992,0,0,1,8.6,3H17V1H8.6A2.981,2.981,0,0,0,5.676,3.349L4.13,10.3A6.008,6.008,0,0,0,0,16v2a6.006,6.006,0,0,0,6,6H18a6.006,6.006,0,0,0,6-6V16A6.007,6.007,0,0,0,19.855,10.3ZM17.219,8l.5,2H6.247l.445-2ZM6,12H18a4,4,0,0,1,4,4H2A4,4,0,0,1,6,12ZM18,22H6a4,4,0,0,1-4-4H22A4,4,0,0,1,18,22Z"/></svg>

);
