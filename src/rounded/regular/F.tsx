import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const F = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H7C4.243,0,2,2.243,2,5V23c.006,1.308,1.994,1.307,2,0V13h13c1.308-.006,1.307-1.994,0-2H4V5c0-1.654,1.346-3,3-3h14c1.308-.006,1.307-1.994,0-2Z"/></svg>

);
