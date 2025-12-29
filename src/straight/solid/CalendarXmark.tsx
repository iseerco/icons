import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm24,2v14H0v-14h24Zm-10.586,7l2.793-2.793-1.414-1.414-2.793,2.793-2.793-2.793-1.414,1.414,2.793,2.793-2.793,2.793,1.414,1.414,2.793-2.793,2.793,2.793,1.414-1.414-2.793-2.793Z"/></svg>

);
