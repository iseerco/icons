import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAcorn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,8.5c0-3.58-2.92-6.5-6.5-6.5h-3V0h-3V2h-3C3.92,2,1,4.92,1,8.5v2.5H3v2.93c0,6.68,8.14,9.72,8.49,9.85l.51,.19,.51-.19c.35-.13,8.49-3.17,8.49-9.85v-2.93h2v-2.5ZM7.5,5h9c1.76,0,3.22,1.31,3.46,3H4.04c.24-1.69,1.7-3,3.46-3Zm10.5,8.93c0,3.81-4.46,6.13-6,6.81-1.54-.69-6-3.01-6-6.81v-2.93h12v2.93Z"/></svg>

);
