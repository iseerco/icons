import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarDay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.002,8v-3C.002,3.346,1.348,2,3.002,2h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H.002Zm6.998,7h-2v2h2v-2Zm17.002-5v14H.002v-14h24Zm-15.002,3H3v6h6v-6Z"/></svg>

);
